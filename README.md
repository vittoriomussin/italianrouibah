# README: Italian Replication of Rouibah et al. (1999) - Experiment 2

## Overview

This project is an implementation in **PsychoPy** of an experiment designed to replicate Experiment 2 from the paper Rouibah et al., 1999.

The original study investigated the automaticity of semantic and phonological priming effects using masked primes in various tasks. Experiment 2 specifically focused on these priming effects within a **semantic categorization task**. This replication adapts the paradigm to the **Italian language** using newly selected stimuli based on specific criteria.

## Original Experiment 2 (Rouibah et al., 1999) Summary

*   **Goal:** To determine if both semantic and phonological priming effects occur automatically in a task requiring semantic processing.
*   **Task:** Semantic Categorization. Participants saw a category name, followed by a masked prime and a target word. They had to decide if the target word belonged to the presented category ("Yes/No" response).
*   **Design:** The crucial manipulation involved the relationship between the masked prime and the "Yes" target word across four conditions:
    1.  **Related-Rhyme:** Prime and target belonged to the same semantic category and rhymed.
    2.  **Related-NonRhyme:** Prime and target belonged to the same semantic category but did not rhyme.
    3.  **Unrelated-Rhyme:** Prime and target belonged to different semantic categories but rhymed.
    4.  **Unrelated-NonRhyme (Control):** Prime and target belonged to different semantic categories and did not rhyme.
*   **Key Finding:** Both significant semantic priming (faster responses when prime and target were related) and phonological priming (faster responses when prime and target rhymed) were observed, suggesting both processes can influence semantic categorization automatically. The study also manipulated Stimulus Onset Asynchrony (SOA) between prime and target (147ms vs. 399ms).

## Italian Replication Details

*   **Goal:** To replicate the findings of Experiment 2 using Italian stimuli and specifically chosen categories, examining both semantic and phonological priming effects.
*   **Task:** Semantic Categorization (Identical to the original).
*   **Language:** Italian.
*   **Categories:** The following four high-level semantic categories were chosen:
    1.  `COLORI` (Colors)
    2.  `CIBO` (Food)
    3.  `ANIMALI` (Animals)
    4.  `PAESAGGIO NATURALE` (Natural Landscapes)
*   **Stimuli:**
    *   **Targets:** 40 target words were selected (20 "Yes" targets, 5 per category; 20 "No" targets).
        *   *Selection Criteria:* Preference for bisyllabic words with a frequency between 100,000 and 1,000,000 occurrences in the Italian Web 2020 (itTenTen20) corpus.
    *   **Primes:** For each of the 20 "Yes" targets, four corresponding primes were created based on the experimental conditions:
        1.  **Related-Rhyme (Correlato-Rima):** Same category, rhymes with target.
        2.  **Related-NonRhyme (Correlato-Non Rima):** Same category, does not rhyme with target.
        3.  **Unrelated-Rhyme (Non Correlato-Rima):** Different category, rhymes with target.
        4.  **Unrelated-NonRhyme (Non Correlato-Non Rima):** Different category, does not rhyme with target (Control).
        *   *Selection Criteria:* Same frequency and syllable criteria as targets where possible. Orthographic similarity was considered but not strictly controlled with a formula as in the original.
    *   **Primes for "No" Targets:** Randomly selected from the unused primes generated for the "Yes" target conditions (as per the original study), ensuring no systematic relationship with the "No" target.
*   **Design:**
    *   **Between-Subjects Factor:**
        *   Stimulus Onset Asynchrony (SOA) (2 levels: 147ms and 399ms SOAs as in the original).
    *   **Within-Subjects Factors (for priming analysis on 'Yes' trials):**
        *   Semantic Relatedness (2 levels: Related prime-target category vs. Unrelated).
        *   Phonological Relatedness (2 levels: Rhyming prime-target vs. Non-rhyming).
*   **Procedure:** A typical trial sequence is:
    1.  Display Category Name (e.g., "ANIMALI")
    2.  Prime (e.g., `RATTO`, presented briefly and masked, e.g., 49ms)
    3.  Backward Mask (e.g., `#########`, e.g., 49ms)
    4.  Blank Screen (Variable duration depending on the SOA condition)
    5.  Target Word (e.g., `GATTO`, displayed until response)
    6.  Participant Response ("Yes"/'No' key press)
*   **Hypotheses:**
    1.  **Semantic Priming:** Responses to "Yes" targets should be faster when preceded by semantically related primes (Related-Rhyme, Related-NonRhyme) compared to unrelated primes (Unrelated-Rhyme, Unrelated-NonRhyme).
    2.  **Phonological Priming:** Responses to "Yes" targets should be faster when preceded by rhyming primes (Related-Rhyme, Unrelated-Rhyme) compared to non-rhyming primes (Related-NonRhyme, Unrelated-NonRhyme).
    3.  An interaction between SOA and priming effects might be observed, potentially mirroring the original study's findings if SOA is varied.

## Comparison: Original Experiment 2 vs. Italian Replication

| Feature                  | Original Exp 2 (Rouibah et al., 1999) | Italian Replication                     |
| :----------------------- | :------------------------------------ | :-------------------------------------- |
| **Language**             | French                                | Italian                                 |
| **Task**                 | Semantic Categorization               | Semantic Categorization               |
| **# Categories**         | 8 (Implicit from Appendix C)          | 4 (Colors, Food, Animals, Landscapes) |
| **# Total Targets**      | 60 (30 Yes / 30 No)                   | 40 (20 Yes / 20 No)                   |
| **Prime Conditions**     | 4 (Related/Unrelated x Rhyme/NonR)  | 4 (Related/Unrelated x Rhyme/NonR)  |
| **SOA Manipulation**     | Yes (147ms vs. 399ms)                 | Yes (147ms vs. 399ms)       |
| **Stimulus Criteria**    | Frequency, Length, OS Control         | Frequency (itTenTen20), Bisyllabic pref. |
| **Orthographic Control** | Yes (Van Orden formula)               | Considered, but not formula-based     |

## Participate in the Experiment

You can participate in the Italian version of this experiment online via the following link:

**[italianrouibah99.online](http://www.italianrouibah99.online/)**

The experiment takes approximately **1 to 2 minutes** to complete.

**Requirements:**

*   You must be a **native Italian speaker**.
*   You must be using a **desktop or laptop computer** (PC/Mac) or a device with a physical keyboard.

Your participation is greatly appreciated and will contribute to research in psycholinguistics!

## References

*   Rouibah, Aïcha & Tiberghien, Guy & Lupker, Stephen. (1999). Phonological and semantic priming: Evidence for task-independent effects. Memory & cognition. 27. 422-37. 10.3758/BF03211538.
*   Peirce, J. W., Gray, J. R., Simpson, S., MacAskill, M. R., Höchenberger, R., Sogo, H., Kastman, E., Lindeløv, J. (2019). PsychoPy2: experiments in behavior made easy. Behavior Research Methods. 10.3758/s13428-018-01193-y
*   Peirce, J. W., Hirst, R. J. & MacAskill, M. R. (2022). Building Experiments in PsychoPy. 2nd Edn London: Sage.
