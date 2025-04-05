/************* 
 * Main *
 *************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'main';  // from the Builder filename that created this script
let expInfo = {
    'età': '20',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(CodeRoutineRoutineBegin());
flowScheduler.add(CodeRoutineRoutineEachFrame());
flowScheduler.add(CodeRoutineRoutineEnd());
flowScheduler.add(instructionRoutineRoutineBegin());
flowScheduler.add(instructionRoutineRoutineEachFrame());
flowScheduler.add(instructionRoutineRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(ThanksRoutineRoutineBegin());
flowScheduler.add(ThanksRoutineRoutineEachFrame());
flowScheduler.add(ThanksRoutineRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var CodeRoutineClock;
var empty_text_duration;
var instructionRoutineClock;
var InstructionText;
var rightKey;
var leftKey;
var InstructionsKeyResponse;
var trialRoutineClock;
var Category;
var Prime;
var Mask;
var EmptyInterval;
var Target;
var TargetKeyResponse;
var ThanksRoutineClock;
var text_3;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "CodeRoutine"
  CodeRoutineClock = new util.Clock();
  // Run 'Begin Experiment' code from SamplingCSV
  // Inserire questo codice in una componente "Begin Experiment"
  async function loadAndProcessCSV() {
      try {
          // 1. Caricamento CSV con cache-buster
          const cacheBuster = `?t=${new Date().getTime()}`;
          const response = await fetch(`condizioni_complete_for_exp.csv${cacheBuster}`);
          
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          
          const csvText = await response.text();
          
          // 2. Parsing avanzato del CSV
          const lines = csvText.split(/\r\n|\n/).filter(line => line.trim() !== '');
          const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
          
          const records = [];
          for (let i = 1; i < lines.length; i++) {
              const values = lines[i].split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/)
                               .map(v => v.trim().replace(/^"|"$/g, ''));
              
              const record = {};
              for (let j = 0; j < headers.length; j++) {
                  record[headers[j]] = values[j] || '';
              }
              records.push(record);
          }
          
          // 3. Log di debug SICURO
          console.log('CSV caricato correttamente:');
          console.log('Headers:', headers);
          console.log('Prime 3 righe:', JSON.stringify(records.slice(0, 3), null, 2));
          console.log('Ultime 3 righe:', JSON.stringify(records.slice(-3), null, 2));
          
          // 4. Selezione casuale della relazione (escludendo "Random")
          const relations = [...new Set(records.map(r => r.relation))]
                            .filter(r => r !== "Random");
          console.log("Relation options:", relations);
          const selectedRelation = relations[Math.floor(Math.random() * relations.length)];
          
          // 5. Filtro dei dati e creazione copie
          expInfo.filtered_data = records.filter(r => 
              r.relation === selectedRelation || r.relation === "Random"
          ).map(row => ({ ...row })); // Crea copie per evitare side effects
          
          // 6. Raccogli righe scartate
          const discardedRows = records.filter(r => 
              r.relation !== selectedRelation && r.relation !== "Random"
          );
          
          // 7. Estrai primes validi dalle righe scartate
          const availablePrimes = discardedRows
              .map(r => r.prime)
              .filter(p => p.trim() !== "");
          
          // 8. Assegnazione casuale dei prime alle righe "Random"
          if (availablePrimes.length > 0) {
              expInfo.filtered_data.forEach(row => {
                  if (row.relation === "Random") {
                      const randomIndex = Math.floor(Math.random() * availablePrimes.length);
                      row.prime = availablePrimes[randomIndex];
                      //row.original_prime = row.original_prime || row.prime; // Mantiene traccia
                  }
              });
          } else {
              console.warn("Nessun prime disponibile dalle righe scartate");
          }
          
          // 8.5 Riordinamento delle righe per evitare categorie consecutive uguali
          const shuffleData = () => {
              const originalData = [...expInfo.filtered_data];
              const reorderedData = [];
              
              // Estrai tutte le categorie uniche
              const uniqueCategories = [...new Set(originalData.map(r => r.category))];
              console.log("Categorie uniche:", uniqueCategories);
              
              // Se c'è una sola categoria, non possiamo evitare ripetizioni
              if (uniqueCategories.length === 1) {
                  console.warn("Solo una categoria presente, impossibile evitare ripetizioni");
                  return originalData;
              }
              
              // 1. Estrai la prima riga casualmente
              const randomIndex = Math.floor(Math.random() * originalData.length);
              const firstRow = originalData.splice(randomIndex, 1)[0];
              reorderedData.push(firstRow);
              
              // 2. Controlla la categoria della prima riga
              let lastCategory = firstRow.category;
              
              // Continua finché ci sono righe nell'array originale
              while (originalData.length > 0) {
                  // 3. Ottieni le righe che non hanno l'ultima categoria
                  const availableRows = originalData.filter(r => r.category !== lastCategory);
                  
                  // Se non ci sono righe disponibili con categoria diversa,
                  // prendi una qualsiasi delle righe rimaste
                  if (availableRows.length === 0) {
                      console.warn(`Non è stato possibile evitare una ripetizione della categoria ${lastCategory}`);
                      const nextRow = originalData.splice(0, 1)[0];
                      reorderedData.push(nextRow);
                      lastCategory = nextRow.category;
                  } else {
                      // 4. Estrai casualmente una riga dalle righe disponibili
                      const nextRandomIndex = Math.floor(Math.random() * availableRows.length);
                      const nextRow = availableRows[nextRandomIndex];
                      
                      // Rimuovi la riga scelta dall'array originale
                      const indexInOriginal = originalData.findIndex(r => 
                          r === nextRow // Confronto per riferimento
                      );
                      originalData.splice(indexInOriginal, 1);
                      
                      // Aggiungi la riga scelta al nuovo array
                      reorderedData.push(nextRow);
                      
                      // 5. Aggiorna l'ultima categoria
                      lastCategory = nextRow.category;
                  }
              }
              
              // Verifica finale: nessuna categoria consecutiva uguale?
              let hasConsecutiveSameCategory = false;
              for (let i = 1; i < reorderedData.length; i++) {
                  if (reorderedData[i].category === reorderedData[i-1].category) {
                      hasConsecutiveSameCategory = true;
                      console.warn(`Categorie consecutive uguali trovate: ${reorderedData[i].category} alle posizioni ${i-1} e ${i}`);
                  }
              }
              
              if (!hasConsecutiveSameCategory) {
                  console.log("Riordinamento completato con successo: nessuna categoria consecutiva uguale");
              }
              
              return reorderedData;
          };
          
          // Applica l'algoritmo di riordinamento
          expInfo.filtered_data = shuffleData();
          
          // 9. Setup variabili globali
          expInfo.relation = selectedRelation;
          //psychoJS.experiment.addData('selected_relation', selectedRelation);
          //expInfo.all_relations = [...new Set(records.map(r => r.relation))];
          
          console.log(`Relazione selezionata: ${selectedRelation}`);
          console.log(`Prime disponibili: ${availablePrimes.length}`);
          console.log(`Righe filtrate: ${expInfo.filtered_data.length}`);
          console.log('Dati finali (primi 3):', JSON.stringify(expInfo.filtered_data.slice(0, 3), null, 2));
          
          // Log aggiuntivo per verificare le categorie consecutive
          console.log('Sequenza categorie:');
          console.log(expInfo.filtered_data.map(r => r.category).join(', '));
          
      } catch (error) {
          console.error('Errore critico:', error);
          psychoJS.gui.dialog.error({
              msg: `Errore nel caricamento del CSV: ${error.message}\n\nVerifica che: 
              - Il file condizioni.csv esista
              - Sia nella stessa cartella dell'esperimento
              - Abbia i permessi corretti`
          });
          psychoJS.core.quit();
      }
  }
  // Esegui la funzione
  loadAndProcessCSV().catch(error => {
      console.error('Errore non gestito:', error);
      psychoJS.core.quit();
  });
  // Imposta la durata casuale
  empty_text_duration = Math.random() < 0.5 ? 0.049 : 0.301;
  expInfo["blankDuration"] = empty_text_duration;
  
  // Inserisci questo codice in una Code Component (nella sezione "Begin Experiment")
  async function getIP() {
      try {
          const response = await fetch("https://api.ipify.org?format=json");
          const data = await response.json();
          return data.ip;
      } catch (error) {
          console.error("Errore nel recupero dell'IP:", error);
          return "unknown";
      }
  }
  
  // Assegna l'IP ai dati dell'esperimento
  async function hashString(string) {
      try {
          // Converti la stringa in un ArrayBuffer
          const encoder = new TextEncoder();
          const data = encoder.encode(string);
          
          // Genera l'hash SHA-256
          const hashBuffer = await crypto.subtle.digest('SHA-256', data);
          
          // Converti l'ArrayBuffer in stringa esadecimale
          const hashArray = Array.from(new Uint8Array(hashBuffer));
          return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      } catch (error) {
          console.error("Errore durante la generazione dell'hash:", error);
          return `unhashed-${Date.now()}`; // Fallback con timestamp per garantire un valore unico
      }
  }
  
  getIP().then(async (ip) => {
      const hashedIP = await hashString(ip);
      expInfo["ip_address_hashed"] = hashedIP;
      
  });
  
  
  
  // Initialize components for Routine "instructionRoutine"
  instructionRoutineClock = new util.Clock();
  InstructionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'InstructionText',
    text: 'Benvenuto!\n\nIn questo esperimento, devi indicare se delle parole appartengono a delle determinate categorie.  Ti verrà prima mostrata la categoria come \n"È <nome della categoria>?"\nquindi:\n- Premi il tasto [freccia destra] (->) se la parola successiva appartiene alla categoria indicata.\n- Premi il tasto [freccia sinistra] (<-) se la parola successiva NON appartiene alla categoria indicata.\n\nCerca di rispondere il più velocemente possibile!\n\nDovrai valutare un totale di 40 parole.\n\npremi [SPAZIO] per continuare',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  rightKey = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightKey',
    text: '[freccia destra] (->)',
    font: 'Arial',
    units: undefined, 
    pos: [0.025, 0.045], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 0.0039, (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  leftKey = new visual.TextStim({
    win: psychoJS.window,
    name: 'leftKey',
    text: '[freccia sinistra] (<-)',
    font: 'Arial',
    units: undefined, 
    pos: [0.025, (- 0.045)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  InstructionsKeyResponse = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trialRoutine"
  trialRoutineClock = new util.Clock();
  Category = new visual.TextStim({
    win: psychoJS.window,
    name: 'Category',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Prime = new visual.TextStim({
    win: psychoJS.window,
    name: 'Prime',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Mask = new visual.TextStim({
    win: psychoJS.window,
    name: 'Mask',
    text: 'XXXXXXXXX',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  EmptyInterval = new visual.TextStim({
    win: psychoJS.window,
    name: 'EmptyInterval',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  Target = new visual.TextStim({
    win: psychoJS.window,
    name: 'Target',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  TargetKeyResponse = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ThanksRoutine"
  ThanksRoutineClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Grazie per la tua partecipazione!\n\nSto salvando i risultati...\n\nAttendi qualche istante prima di chiudere la scheda',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var CodeRoutineMaxDurationReached;
var CodeRoutineMaxDuration;
var CodeRoutineComponents;
function CodeRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'CodeRoutine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    CodeRoutineClock.reset();
    routineTimer.reset();
    CodeRoutineMaxDurationReached = false;
    // update component parameters for each repeat
    CodeRoutineMaxDuration = null
    // keep track of which components have finished
    CodeRoutineComponents = [];
    
    for (const thisComponent of CodeRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function CodeRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'CodeRoutine' ---
    // get current time
    t = CodeRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of CodeRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CodeRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'CodeRoutine' ---
    for (const thisComponent of CodeRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "CodeRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructionRoutineMaxDurationReached;
var _InstructionsKeyResponse_allKeys;
var instructionRoutineMaxDuration;
var instructionRoutineComponents;
function instructionRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructionRoutine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructionRoutineClock.reset();
    routineTimer.reset();
    instructionRoutineMaxDurationReached = false;
    // update component parameters for each repeat
    InstructionsKeyResponse.keys = undefined;
    InstructionsKeyResponse.rt = undefined;
    _InstructionsKeyResponse_allKeys = [];
    instructionRoutineMaxDuration = null
    // keep track of which components have finished
    instructionRoutineComponents = [];
    instructionRoutineComponents.push(InstructionText);
    instructionRoutineComponents.push(rightKey);
    instructionRoutineComponents.push(leftKey);
    instructionRoutineComponents.push(InstructionsKeyResponse);
    
    for (const thisComponent of instructionRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructionRoutine' ---
    // get current time
    t = instructionRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *InstructionText* updates
    if (t >= 0.0 && InstructionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstructionText.tStart = t;  // (not accounting for frame time here)
      InstructionText.frameNStart = frameN;  // exact frame index
      
      InstructionText.setAutoDraw(true);
    }
    
    
    // *rightKey* updates
    if (t >= 0.0 && rightKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rightKey.tStart = t;  // (not accounting for frame time here)
      rightKey.frameNStart = frameN;  // exact frame index
      
      rightKey.setAutoDraw(true);
    }
    
    
    // *leftKey* updates
    if (t >= 0.0 && leftKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      leftKey.tStart = t;  // (not accounting for frame time here)
      leftKey.frameNStart = frameN;  // exact frame index
      
      leftKey.setAutoDraw(true);
    }
    
    
    // *InstructionsKeyResponse* updates
    if (t >= 0.0 && InstructionsKeyResponse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstructionsKeyResponse.tStart = t;  // (not accounting for frame time here)
      InstructionsKeyResponse.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { InstructionsKeyResponse.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { InstructionsKeyResponse.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { InstructionsKeyResponse.clearEvents(); });
    }
    
    if (InstructionsKeyResponse.status === PsychoJS.Status.STARTED) {
      let theseKeys = InstructionsKeyResponse.getKeys({keyList: ['space'], waitRelease: false});
      _InstructionsKeyResponse_allKeys = _InstructionsKeyResponse_allKeys.concat(theseKeys);
      if (_InstructionsKeyResponse_allKeys.length > 0) {
        InstructionsKeyResponse.keys = _InstructionsKeyResponse_allKeys[_InstructionsKeyResponse_allKeys.length - 1].name;  // just the last key pressed
        InstructionsKeyResponse.rt = _InstructionsKeyResponse_allKeys[_InstructionsKeyResponse_allKeys.length - 1].rt;
        InstructionsKeyResponse.duration = _InstructionsKeyResponse_allKeys[_InstructionsKeyResponse_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructionRoutine' ---
    for (const thisComponent of instructionRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    InstructionsKeyResponse.stop();
    // the Routine "instructionRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: expInfo.filtered_data,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialRoutineMaxDurationReached;
var category_duration;
var prime_start;
var prime_duration;
var mask_start;
var mask_duration;
var empty_text_start;
var target_text_start;
var currentCategoryText;
var _TargetKeyResponse_allKeys;
var trialRoutineMaxDuration;
var trialRoutineComponents;
function trialRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trialRoutine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trialRoutineClock.reset();
    routineTimer.reset();
    trialRoutineMaxDurationReached = false;
    // update component parameters for each repeat
    // Nel tab "Begin Routine"
    
    category_duration = 1.498;
    
    prime_start = category_duration;
    prime_duration = 0.049;
    
    mask_start = prime_start + prime_duration;
    mask_duration = 0.049;
    
    empty_text_start = mask_start + mask_duration;
    empty_text_duration = expInfo['blankDuration'];
    
    target_text_start = empty_text_start + empty_text_duration;
    
    currentCategoryText = `È ${category.replace(/_/g, ' ')}?`;
    Category.setText(currentCategoryText);
    Prime.setText(prime);
    EmptyInterval.setText('');
    Target.setText(target);
    TargetKeyResponse.keys = undefined;
    TargetKeyResponse.rt = undefined;
    _TargetKeyResponse_allKeys = [];
    psychoJS.experiment.addData('trialRoutine.started', globalClock.getTime());
    trialRoutineMaxDuration = null
    // keep track of which components have finished
    trialRoutineComponents = [];
    trialRoutineComponents.push(Category);
    trialRoutineComponents.push(Prime);
    trialRoutineComponents.push(Mask);
    trialRoutineComponents.push(EmptyInterval);
    trialRoutineComponents.push(Target);
    trialRoutineComponents.push(TargetKeyResponse);
    
    for (const thisComponent of trialRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trialRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trialRoutine' ---
    // get current time
    t = trialRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Category* updates
    if (t >= 0.0 && Category.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Category.tStart = t;  // (not accounting for frame time here)
      Category.frameNStart = frameN;  // exact frame index
      
      Category.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + category_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Category.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Category.setAutoDraw(false);
    }
    
    
    // *Prime* updates
    if (t >= prime_start && Prime.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Prime.tStart = t;  // (not accounting for frame time here)
      Prime.frameNStart = frameN;  // exact frame index
      
      Prime.setAutoDraw(true);
    }
    
    frameRemains = prime_start + prime_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Prime.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Prime.setAutoDraw(false);
    }
    
    
    // *Mask* updates
    if (t >= mask_start && Mask.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Mask.tStart = t;  // (not accounting for frame time here)
      Mask.frameNStart = frameN;  // exact frame index
      
      Mask.setAutoDraw(true);
    }
    
    frameRemains = mask_start + mask_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Mask.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Mask.setAutoDraw(false);
    }
    
    
    // *EmptyInterval* updates
    if (t >= empty_text_start && EmptyInterval.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      EmptyInterval.tStart = t;  // (not accounting for frame time here)
      EmptyInterval.frameNStart = frameN;  // exact frame index
      
      EmptyInterval.setAutoDraw(true);
    }
    
    frameRemains = empty_text_start + empty_text_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (EmptyInterval.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      EmptyInterval.setAutoDraw(false);
    }
    
    
    // *Target* updates
    if (t >= target_text_start && Target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Target.tStart = t;  // (not accounting for frame time here)
      Target.frameNStart = frameN;  // exact frame index
      
      Target.setAutoDraw(true);
    }
    
    
    // *TargetKeyResponse* updates
    if (t >= target_text_start && TargetKeyResponse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TargetKeyResponse.tStart = t;  // (not accounting for frame time here)
      TargetKeyResponse.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { TargetKeyResponse.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { TargetKeyResponse.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { TargetKeyResponse.clearEvents(); });
    }
    
    if (TargetKeyResponse.status === PsychoJS.Status.STARTED) {
      let theseKeys = TargetKeyResponse.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _TargetKeyResponse_allKeys = _TargetKeyResponse_allKeys.concat(theseKeys);
      if (_TargetKeyResponse_allKeys.length > 0) {
        TargetKeyResponse.keys = _TargetKeyResponse_allKeys[_TargetKeyResponse_allKeys.length - 1].name;  // just the last key pressed
        TargetKeyResponse.rt = _TargetKeyResponse_allKeys[_TargetKeyResponse_allKeys.length - 1].rt;
        TargetKeyResponse.duration = _TargetKeyResponse_allKeys[_TargetKeyResponse_allKeys.length - 1].duration;
        // was this correct?
        if (TargetKeyResponse.keys == is_in_category) {
            TargetKeyResponse.corr = 1;
        } else {
            TargetKeyResponse.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var hashedIP;
function trialRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trialRoutine' ---
    for (const thisComponent of trialRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trialRoutine.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (TargetKeyResponse.keys === undefined) {
      if (['None','none',undefined].includes(is_in_category)) {
         TargetKeyResponse.corr = 1;  // correct non-response
      } else {
         TargetKeyResponse.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(TargetKeyResponse.corr, level);
    }
    psychoJS.experiment.addData('TargetKeyResponse.keys', TargetKeyResponse.keys);
    psychoJS.experiment.addData('TargetKeyResponse.corr', TargetKeyResponse.corr);
    if (typeof TargetKeyResponse.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('TargetKeyResponse.rt', TargetKeyResponse.rt);
        psychoJS.experiment.addData('TargetKeyResponse.duration', TargetKeyResponse.duration);
        routineTimer.reset();
        }
    
    TargetKeyResponse.stop();
    // Run 'End Routine' code from saveBlankDuration
    psychoJS._experiment.addData("blankDuration", empty_text_duration);
    hashedIP = expInfo["ip_address_hashed"]
    psychoJS.experiment.addData('ip_address_hashed', hashedIP);
    psychoJS.experiment.addData('browser_userAgent', navigator.userAgent);
    psychoJS.experiment.addData('browser_platform', navigator.platform);
    psychoJS.experiment.addData('browser_language', navigator.language);
    psychoJS.experiment.addData('browser_vendor', navigator.vendor);
    psychoJS.experiment.addData('browser_cookiesEnabled', navigator.cookieEnabled);
    psychoJS.experiment.addData('screen_resolution', `${window.screen.width}x${window.screen.height}`);
    psychoJS.experiment.addData('screen_colorDepth', window.screen.colorDepth);
    psychoJS.experiment.addData('screen_pixelDepth', window.screen.pixelDepth);
    psychoJS.experiment.addData('timezone', Intl.DateTimeFormat().resolvedOptions().timeZone);
    // the Routine "trialRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ThanksRoutineMaxDurationReached;
var ThanksRoutineMaxDuration;
var ThanksRoutineComponents;
function ThanksRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ThanksRoutine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ThanksRoutineClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    ThanksRoutineMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0; //should be set to 0
    
    // Generate filename for results
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    
    // Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    
    // Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString();
    }).join('\n');
    
    // Send data to OSF (${}) DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
        },
        body: JSON.stringify({
            experimentID: 'zg5BLmb8g0ch', // * UPDATE WITH YOUR DATAPIPE EXPERIMENT ID *
            filename: filename,
            data: data,
        })
    })
    .then(response => response.json())
    .then(data => {
        // Log response and force experiment end
        console.log(data);
        quitPsychoJS();
    });
    ThanksRoutineMaxDuration = null
    // keep track of which components have finished
    ThanksRoutineComponents = [];
    ThanksRoutineComponents.push(text_3);
    
    for (const thisComponent of ThanksRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ThanksRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ThanksRoutine' ---
    // get current time
    t = ThanksRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ThanksRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ThanksRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ThanksRoutine' ---
    for (const thisComponent of ThanksRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (ThanksRoutineMaxDurationReached) {
        ThanksRoutineClock.add(ThanksRoutineMaxDuration);
    } else {
        ThanksRoutineClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
