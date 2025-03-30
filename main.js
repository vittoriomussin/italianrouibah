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
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
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
flowScheduler.add(SemanticCategoryRoutineBegin());
flowScheduler.add(SemanticCategoryRoutineEachFrame());
flowScheduler.add(SemanticCategoryRoutineEnd());
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
    {'name': 'condizioni.csv', 'path': 'condizioni.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);

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

async function experimentInit() {
  // Initialize components for Routine "CodeRoutine"
  CodeRoutineClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  import * as pd from 'pandas';
  import * as random from 'random';
  df_categorie = pd.read_csv("condizioni.csv");
  riga_casuale = Math.random.choice(df_categorie.to_dict("records"));
  expInfo["category"] = riga_casuale["category"];
  expInfo["contrary"] = riga_casuale["contrary"];
  
  // Initialize components for Routine "instructionRoutine"
  instructionRoutineClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Benvenuto!\n\nIn questo eperimento il tuo compito è indicare se la parola appartiene alla categoria indicata con i tasti freccia sinistra (<-) e freccia destra (->)\n\nCerca di rispondere il più velocemente possibile!\n\npremi [SPAZIO] per continuare',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "SemanticCategory"
  SemanticCategoryClock = new util.Clock();
  category_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'category_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "trialRoutine"
  trialRoutineClock = new util.Clock();
  Prime = new visual.TextStim({
    win: psychoJS.window,
    name: 'Prime',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
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
    depth: -1.0 
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
    depth: -2.0 
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
    depth: -3.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
    psychoJS.experiment.addData('CodeRoutine.started', globalClock.getTime());
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
    psychoJS.experiment.addData('CodeRoutine.stopped', globalClock.getTime());
    // the Routine "CodeRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

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
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('instructionRoutine.started', globalClock.getTime());
    instructionRoutineMaxDuration = null
    // keep track of which components have finished
    instructionRoutineComponents = [];
    instructionRoutineComponents.push(text);
    instructionRoutineComponents.push(key_resp);
    
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
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
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
    psychoJS.experiment.addData('instructionRoutine.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "instructionRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function SemanticCategoryRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'SemanticCategory' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    SemanticCategoryClock.reset(routineTimer.getTime());
    routineTimer.add(2.498000);
    SemanticCategoryMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    category = expInfo["category"];
    contrary = expInfo["contrary"];
    testo_dinamico = `
    Classifica le parole come:
    ${category} (<-) VS ${contrary} (->)`
    ;
    category_text.setText(testo_dinamico);
    
    psychoJS.experiment.addData('SemanticCategory.started', globalClock.getTime());
    SemanticCategoryMaxDuration = null
    // keep track of which components have finished
    SemanticCategoryComponents = [];
    SemanticCategoryComponents.push(category_text);
    
    for (const thisComponent of SemanticCategoryComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function SemanticCategoryRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'SemanticCategory' ---
    // get current time
    t = SemanticCategoryClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *category_text* updates
    if (t >= 0.0 && category_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      category_text.tStart = t;  // (not accounting for frame time here)
      category_text.frameNStart = frameN;  // exact frame index
      
      category_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.498 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (category_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      category_text.setAutoDraw(false);
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
    for (const thisComponent of SemanticCategoryComponents)
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

function SemanticCategoryRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'SemanticCategory' ---
    for (const thisComponent of SemanticCategoryComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('SemanticCategory.stopped', globalClock.getTime());
    if (SemanticCategoryMaxDurationReached) {
        SemanticCategoryClock.add(SemanticCategoryMaxDuration);
    } else {
        SemanticCategoryClock.add(2.498000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'condizioni.csv',
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
    Prime.setText(prime);
    Target.setText(target);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('trialRoutine.started', globalClock.getTime());
    trialRoutineMaxDuration = null
    // keep track of which components have finished
    trialRoutineComponents = [];
    trialRoutineComponents.push(Prime);
    trialRoutineComponents.push(Mask);
    trialRoutineComponents.push(EmptyInterval);
    trialRoutineComponents.push(Target);
    trialRoutineComponents.push(key_resp_2);
    
    for (const thisComponent of trialRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function trialRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trialRoutine' ---
    // get current time
    t = trialRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Prime* updates
    if (t >= 0.0 && Prime.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Prime.tStart = t;  // (not accounting for frame time here)
      Prime.frameNStart = frameN;  // exact frame index
      
      Prime.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.049 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Prime.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Prime.setAutoDraw(false);
    }
    
    
    // *Mask* updates
    if (t >= 0.0 && Mask.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Mask.tStart = t;  // (not accounting for frame time here)
      Mask.frameNStart = frameN;  // exact frame index
      
      Mask.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.049 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Mask.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Mask.setAutoDraw(false);
    }
    
    
    // *EmptyInterval* updates
    if (t >= 0.0 && EmptyInterval.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      EmptyInterval.tStart = t;  // (not accounting for frame time here)
      EmptyInterval.frameNStart = frameN;  // exact frame index
      
      EmptyInterval.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.049 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (EmptyInterval.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      EmptyInterval.setAutoDraw(false);
    }
    
    
    // *Target* updates
    if (t >= 0.0 && Target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Target.tStart = t;  // (not accounting for frame time here)
      Target.frameNStart = frameN;  // exact frame index
      
      Target.setAutoDraw(true);
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_2.keys == '') {
            key_resp_2.corr = 1;
        } else {
            key_resp_2.corr = 0;
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
    if (key_resp_2.keys === undefined) {
      if (['None','none',undefined].includes('')) {
         key_resp_2.corr = 1;  // correct non-response
      } else {
         key_resp_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    psychoJS.experiment.addData('key_resp_2.corr', key_resp_2.corr);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "trialRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

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
    psychoJS_saveResults = 0;
    
    // Generate filename for results
    let filename = psychoJS_experiment_experimentName + '_' + psychoJS_experiment_datetime + '.csv';
    
    // Extract data object from experiment
    let dataObj = psychoJS_experiment_trialsData;
    
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
    psychoJS.experiment.addData('ThanksRoutine.started', globalClock.getTime());
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
    psychoJS.experiment.addData('ThanksRoutine.stopped', globalClock.getTime());
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
