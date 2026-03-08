// Course Data
const courseData = {
    modules: [
        {
            id: 1,
            title: "Module 1: Introduction & Terminology",
            description: "Learn the foundational concepts and key terminology in infusion drug billing.",
            content: `
                <h3>Introduction to Infusion Billing</h3>
                <p>Infusion drug billing is one of the most complex areas of medical billing because you're billing for <strong>TWO components</strong>:</p>
                <ol>
                    <li><strong>The Drug Itself</strong> (J-code or Q-code)</li>
                    <li><strong>The Administration</strong> (CPT code 96xxx series)</li>
                </ol>

                <div class="callout callout-warning">
                    <strong>⚠️ Important:</strong> Both components must be coded correctly, or the claim will be denied or underpaid.
                </div>

                <h3>Key Drug Codes</h3>
                <table>
                    <tr>
                        <th>Term</th>
                        <th>Definition</th>
                        <th>Example</th>
                    </tr>
                    <tr>
                        <td><strong>J-Code</strong></td>
                        <td>HCPCS code for brand name drugs</td>
                        <td>J0129 (Orencia)</td>
                    </tr>
                    <tr>
                        <td><strong>Q-Code</strong></td>
                        <td>HCPCS code for biosimilar drugs</td>
                        <td>Q5103 (Inflectra)</td>
                    </tr>
                    <tr>
                        <td><strong>NDC</strong></td>
                        <td>National Drug Code - unique 11-digit identifier</td>
                        <td>0078-0435-61</td>
                    </tr>
                </table>

                <div class="callout callout-info">
                    <strong>Critical NDC Rule:</strong> NDC must be obtained from the actual vial used and documented in infusion notes. Never use reference NDCs without verification.
                </div>

                <h3>Key Modifiers</h3>
                <ul>
                    <li><strong>JA</strong> - Administered intravenously</li>
                    <li><strong>JW</strong> - Drug amount discarded (WASTAGE)</li>
                    <li><strong>JZ</strong> - Zero drug amount discarded (NO WASTAGE)</li>
                    <li><strong>59</strong> - Distinct procedural service (for premeds)</li>
                </ul>
            `,
            questions: [
                {
                    question: "Infusion drug billing requires coding for how many components?",
                    options: ["One", "Two", "Three", "Four"],
                    correct: 1
                },
                {
                    question: "Which code type is used for brand name infusion drugs?",
                    options: ["Q-Code", "J-Code", "CPT Code", "ICD-10 Code"],
                    correct: 1
                },
                {
                    question: "Which code type is used for biosimilar drugs?",
                    options: ["J-Code", "CPT Code", "Q-Code", "NDC"],
                    correct: 2
                },
                {
                    question: "What does NDC stand for?",
                    options: ["National Drug Classification", "National Drug Code", "National Diagnosis Code", "None of the above"],
                    correct: 1
                },
                {
                    question: "Where must the NDC be verified from?",
                    options: ["Reference chart", "Previous claim", "Actual vial label in infusion notes", "Memory"],
                    correct: 2
                },
                {
                    question: "Which modifier indicates drug wastage?",
                    options: ["JA", "JZ", "JW", "59"],
                    correct: 2
                },
                {
                    question: "Which modifier indicates NO wastage?",
                    options: ["JA", "JW", "JZ", "59"],
                    correct: 2
                },
                {
                    question: "Which modifier is used for premedications?",
                    options: ["JA", "JW", "JZ", "59"],
                    correct: 3
                },
                {
                    question: "Inflectra is a biosimilar to which drug?",
                    options: ["Rituxan", "Remicade", "Orencia", "Actemra"],
                    correct: 1
                },
                {
                    question: "What happens if both drug and administration codes are not coded correctly?",
                    options: ["Claim is paid partially", "Claim is denied or underpaid", "Claim is paid in full", "Nothing happens"],
                    correct: 1
                }
            ]
        },
        {
            id: 2,
            title: "Module 2: Billing Unit Conversion",
            description: "Master the critical skill of converting doses to billing units.",
            content: `
                <h3>Understanding Billing Unit Conversion</h3>
                <p><strong>This is where many new billers make mistakes.</strong> The "billing unit" is different from the actual dose given.</p>

                <div class="callout callout-success">
                    <strong>Formula:</strong> Billing Units = Total Dose Administered ÷ Billing Unit for That Drug
                </div>

                <h3>Key Patterns</h3>

                <h4>Pattern 1: 10 mg Billing Unit Drugs</h4>
                <ul>
                    <li>Remicade family (Inflectra, Renflexis, Avsola)</li>
                    <li>Rituxan family (Ruxience, Truxima)</li>
                    <li>Orencia, Benlysta</li>
                    <li><strong>Rule:</strong> Divide dose by 10</li>
                </ul>

                <h4>Pattern 2: 1 mg Billing Unit Drugs</h4>
                <ul>
                    <li>Actemra, Cosentyx, Reclast, Simponi Aria, Saphnelo, Stelara, Krystexxa</li>
                    <li><strong>Rule:</strong> Dose = Units (divide by 1)</li>
                </ul>

                <h3>Practice Example</h3>
                <p><strong>Remicade - 400 mg administered:</strong></p>
                <ul>
                    <li>Billing unit: 10 mg</li>
                    <li>Calculation: 400 ÷ 10 = <strong>40 units</strong></li>
                    <li>Bill: J1745 × 40</li>
                </ul>

                <p><strong>Actemra - 560 mg administered:</strong></p>
                <ul>
                    <li>Billing unit: 1 mg</li>
                    <li>Calculation: 560 ÷ 1 = <strong>560 units</strong></li>
                    <li>Bill: J3262 × 560</li>
                </ul>
            `,
            questions: [
                {
                    question: "What is the formula for calculating billing units?",
                    options: [
                        "Dose × Billing Unit",
                        "Dose ÷ Billing Unit",
                        "Billing Unit ÷ Dose",
                        "Dose + Billing Unit"
                    ],
                    correct: 1
                },
                {
                    question: "Remicade has what billing unit?",
                    options: ["1 mg per unit", "5 mg per unit", "10 mg per unit", "100 mg per unit"],
                    correct: 2
                },
                {
                    question: "If a patient receives 500 mg of Remicade, how many billing units?",
                    options: ["5 units", "50 units", "500 units", "5000 units"],
                    correct: 1
                },
                {
                    question: "Actemra has what billing unit?",
                    options: ["1 mg per unit", "10 mg per unit", "100 mg per unit", "1000 mg per unit"],
                    correct: 0
                },
                {
                    question: "If a patient receives 400 mg of Actemra, how many billing units?",
                    options: ["4 units", "40 units", "400 units", "4000 units"],
                    correct: 2
                },
                {
                    question: "Which drug family uses 10 mg billing units?",
                    options: ["Actemra family", "Remicade family", "Stelara family", "All of the above"],
                    correct: 1
                },
                {
                    question: "Orencia 750 mg = how many billing units?",
                    options: ["7.5 units", "75 units", "750 units", "7500 units"],
                    correct: 1
                },
                {
                    question: "Cosentyx 150 mg = how many billing units?",
                    options: ["1.5 units", "15 units", "150 units", "1500 units"],
                    correct: 2
                },
                {
                    question: "What is the most common billing unit conversion mistake?",
                    options: [
                        "Not converting at all and using mg",
                        "Multiplying instead of dividing",
                        "Using the wrong billing unit",
                        "All of the above"
                    ],
                    correct: 3
                },
                {
                    question: "If Rituxan 600 mg is given, what do you bill?",
                    options: ["J9312 × 6", "J9312 × 60", "J9312 × 600", "J9312 × 6000"],
                    correct: 1
                }
            ]
        },
        {
            id: 3,
            title: "Module 3: The 5-Step Billing Process",
            description: "Learn the systematic approach to billing infusion drugs correctly.",
            content: `
                <h3>The 5-Step Billing Process</h3>

                <h4>Step 1: Identify the Drug</h4>
                <ul>
                    <li>Review the medication administration record (MAR)</li>
                    <li>Confirm exact drug name (e.g., Remicade vs. Inflectra)</li>
                    <li><strong>Biosimilar Check:</strong> Use Q-code for biosimilars, J-code for originals</li>
                    <li><strong>Verify NDC</strong> from actual vial in infusion notes</li>
                </ul>

                <h4>Step 2: Determine the Dose Administered</h4>
                <ul>
                    <li>Find total mg/ml administered in clinical notes</li>
                    <li>Check number of vials used</li>
                    <li>Calculate total dose</li>
                </ul>

                <h4>Step 3: Calculate Billing Units</h4>
                <ul>
                    <li>Check billing unit for the drug</li>
                    <li>Divide total dose by billing unit</li>
                </ul>

                <h4>Step 4: Calculate Wastage</h4>
                <ul>
                    <li>Check vial size (dosing unit)</li>
                    <li>Calculate total drug drawn from vials</li>
                    <li>Subtract administered from total = wastage</li>
                    <li>Apply JW if wastage exists, JZ if no wastage</li>
                </ul>

                <h4>Step 5: Code the Administration</h4>
                <ul>
                    <li>Review infusion start/stop times</li>
                    <li>Determine duration (<1 hour, 1-2 hours, 2+ hours)</li>
                    <li>Select correct CPT codes</li>
                </ul>

                <div class="callout callout-warning">
                    <strong>Important:</strong> All 5 steps must be completed for every infusion claim!
                </div>
            `,
            questions: [
                {
                    question: "What is the FIRST step in the billing process?",
                    options: [
                        "Calculate billing units",
                        "Identify the drug",
                        "Determine dose administered",
                        "Code administration"
                    ],
                    correct: 1
                },
                {
                    question: "Where do you verify the NDC?",
                    options: [
                        "Reference chart",
                        "Previous claim",
                        "Actual vial label in infusion notes",
                        "Drug formulary"
                    ],
                    correct: 2
                },
                {
                    question: "What is Step 2 in the billing process?",
                    options: [
                        "Identify the drug",
                        "Determine dose administered",
                        "Calculate billing units",
                        "Calculate wastage"
                    ],
                    correct: 1
                },
                {
                    question: "When calculating wastage, what do you subtract?",
                    options: [
                        "Vials used - billing units",
                        "Total drug drawn - dose administered",
                        "Dose administered - total drug drawn",
                        "Billing units - wastage"
                    ],
                    correct: 1
                },
                {
                    question: "Which modifier is used when there is NO wastage?",
                    options: ["JA", "JW", "JZ", "59"],
                    correct: 2
                },
                {
                    question: "Step 5 requires reviewing what?",
                    options: [
                        "Drug name",
                        "Vial size",
                        "Infusion start/stop times",
                        "Billing units"
                    ],
                    correct: 2
                },
                {
                    question: "What determines the administration CPT codes?",
                    options: [
                        "Drug type",
                        "Infusion duration",
                        "Vial size",
                        "Wastage amount"
                    ],
                    correct: 1
                },
                {
                    question: "If you skip verifying the NDC from the vial, what happens?",
                    options: [
                        "Nothing",
                        "Claim might be denied/audited",
                        "Claim is paid in full",
                        "Only a warning is issued"
                    ],
                    correct: 1
                },
                {
                    question: "How many steps are in the complete billing process?",
                    options: ["3 steps", "4 steps", "5 steps", "6 steps"],
                    correct: 2
                },
                {
                    question: "Which step involves checking the vial size?",
                    options: ["Step 1", "Step 2", "Step 3", "Step 4"],
                    correct: 3
                }
            ]
        },
        {
            id: 4,
            title: "Module 4: Drug-Specific Requirements",
            description: "Understand the unique billing requirements for different infusion drugs.",
            content: `
                <h3>Drug Categories</h3>

                <h4>Category 1: Simple Infusion (< 1 hour) - Use 96413 only</h4>
                <table>
                    <tr>
                        <th>Drug</th>
                        <th>Code</th>
                        <th>Billing Unit</th>
                        <th>Special Notes</th>
                    </tr>
                    <tr>
                        <td>Orencia</td>
                        <td>J0129</td>
                        <td>10 mg</td>
                        <td>Modifier JA required</td>
                    </tr>
                    <tr>
                        <td>Benlysta</td>
                        <td>J0490</td>
                        <td>10 mg</td>
                        <td>Modifier JA required</td>
                    </tr>
                    <tr>
                        <td>Cosentyx</td>
                        <td>J0491</td>
                        <td>1 mg</td>
                        <td>Always JZ (no wastage)</td>
                    </tr>
                </table>

                <h4>Category 2: Standard 2-Hour Infusion - Use 96413 + 96415</h4>
                <table>
                    <tr>
                        <th>Drug</th>
                        <th>Code</th>
                        <th>Billing Unit</th>
                    </tr>
                    <tr>
                        <td>Remicade</td>
                        <td>J1745</td>
                        <td>10 mg</td>
                    </tr>
                    <tr>
                        <td>Inflectra (biosimilar)</td>
                        <td>Q5103</td>
                        <td>10 mg</td>
                    </tr>
                    <tr>
                        <td>Rituxan</td>
                        <td>J9312</td>
                        <td>10 mg</td>
                    </tr>
                    <tr>
                        <td>Ruxience (biosimilar)</td>
                        <td>Q5119</td>
                        <td>10 mg</td>
                    </tr>
                </table>

                <h4>Special Case: Simponi Aria</h4>
                <div class="callout callout-warning">
                    <strong>⚠️ Critical:</strong> Simponi Aria uses 96365 (non-time-based), NOT 96413!
                </div>

                <h3>Biosimilar vs Original</h3>
                <ul>
                    <li><strong>Remicade (J1745)</strong> → Biosimilars: Inflectra (Q5103), Renflexis (Q5104), Avsola (Q5121)</li>
                    <li><strong>Rituxan (J9312)</strong> → Biosimilars: Ruxience (Q5119), Truxima (Q5115)</li>
                </ul>
            `,
            questions: [
                {
                    question: "Which CPT code is used for simple infusions under 1 hour?",
                    options: ["96365", "96413", "96415", "96374"],
                    correct: 1
                },
                {
                    question: "Orencia requires which special modifier?",
                    options: ["JW", "JZ", "JA", "59"],
                    correct: 2
                },
                {
                    question: "Cosentyx always uses which modifier?",
                    options: ["JW", "JZ", "JA", "59"],
                    correct: 1
                },
                {
                    question: "For a 2-hour infusion, which codes are used?",
                    options: [
                        "96413 only",
                        "96413 + 96415",
                        "96365 + 96366",
                        "96374 + 96375"
                    ],
                    correct: 1
                },
                {
                    question: "Inflectra is a biosimilar to which drug?",
                    options: ["Rituxan", "Remicade", "Orencia", "Actemra"],
                    correct: 1
                },
                {
                    question: "What is the J-code for Remicade?",
                    options: ["J0129", "J1745", "J9312", "Q5103"],
                    correct: 1
                },
                {
                    question: "What is the Q-code for Inflectra?",
                    options: ["Q5103", "Q5104", "Q5119", "Q5121"],
                    correct: 0
                },
                {
                    question: "Which drug uses 96365 instead of 96413?",
                    options: ["Remicade", "Rituxan", "Simponi Aria", "Orencia"],
                    correct: 2
                },
                {
                    question: "Ruxience is a biosimilar to which drug?",
                    options: ["Remicade", "Rituxan", "Orencia", "Actemra"],
                    correct: 1
                },
                {
                    question: "Which drugs require the JA modifier?",
                    options: [
                        "All drugs",
                        "Orencia and Benlysta",
                        "Remicade and Rituxan",
                        "Biosimilars only"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 5,
            title: "Module 5: Administration Codes & Modifiers",
            description: "Master CPT administration codes and modifier usage.",
            content: `
                <h3>Administration Codes</h3>

                <table>
                    <tr>
                        <th>Code</th>
                        <th>Description</th>
                        <th>When to Use</th>
                    </tr>
                    <tr>
                        <td>96413</td>
                        <td>Chemo infusion, initial, up to 1 hour</td>
                        <td>First hour of most infusion drugs</td>
                    </tr>
                    <tr>
                        <td>96415</td>
                        <td>Chemo infusion, additional hour</td>
                        <td>Each additional hour after 96413</td>
                    </tr>
                    <tr>
                        <td>96365</td>
                        <td>Non-chemo infusion, initial</td>
                        <td>Stelara, Krystexxa, Simponi Aria</td>
                    </tr>
                    <tr>
                        <td>96366</td>
                        <td>Non-chemo infusion, additional hour</td>
                        <td>Each additional hour after 96365</td>
                    </tr>
                    <tr>
                        <td>96374</td>
                        <td>IV push, initial</td>
                        <td>First premedication</td>
                    </tr>
                    <tr>
                        <td>96375</td>
                        <td>IV push, additional</td>
                        <td>Second+ premedication</td>
                    </tr>
                </table>

                <h3>Time-Based Billing</h3>
                <table>
                    <tr>
                        <th>Duration</th>
                        <th>Codes to Bill</th>
                    </tr>
                    <tr>
                        <td>45 minutes</td>
                        <td>96413 only</td>
                    </tr>
                    <tr>
                        <td>1 hour 15 minutes</td>
                        <td>96413 + 96415</td>
                    </tr>
                    <tr>
                        <td>2 hours 30 minutes</td>
                        <td>96413 + 96415 × 2</td>
                    </tr>
                </table>

                <h3>Premedication Coding</h3>
                <ul>
                    <li>1st Premed (e.g., Benadryl 25mg IV): 96374-59 + J1200</li>
                    <li>2nd Premed (e.g., Solumedrol 125mg IV): 96375-59 + J2919</li>
                    <li>Modifier 59 prevents bundling with main infusion</li>
                </ul>

                <div class="callout callout-info">
                    <strong>Remember:</strong> Time rounds up. A 1 hour 10 minute infusion bills as 2 hours (96413 + 96415).
                </div>
            `,
            questions: [
                {
                    question: "Which code is used for the FIRST hour of a chemotherapy infusion?",
                    options: ["96365", "96413", "96415", "96374"],
                    correct: 1
                },
                {
                    question: "Which code is used for ADDITIONAL hours after the first?",
                    options: ["96413", "96415", "96365", "96366"],
                    correct: 1
                },
                {
                    question: "A 45-minute infusion uses which code(s)?",
                    options: [
                        "96413 only",
                        "96413 + 96415",
                        "96365 only",
                        "No code needed"
                    ],
                    correct: 0
                },
                {
                    question: "A 2.5-hour infusion uses which code(s)?",
                    options: [
                        "96413 only",
                        "96413 + 96415",
                        "96413 + 96415 + 96415",
                        "96413 + 96415 + 96415 + 96415"
                    ],
                    correct: 2
                },
                {
                    question: "Which code is used for the first IV push premedication?",
                    options: ["96374", "96375", "96413", "96365"],
                    correct: 0
                },
                {
                    question: "Which modifier is required on premedication codes?",
                    options: ["JA", "JW", "JZ", "59"],
                    correct: 3
                },
                {
                    question: "If an infusion is 1 hour 10 minutes, how many hours do you bill?",
                    options: ["1 hour", "2 hours", "1.5 hours", "No billing needed"],
                    correct: 1
                },
                {
                    question: "96365 is used for which type of infusions?",
                    options: [
                        "All infusions",
                        "Chemotherapy only",
                        "Non-chemotherapy (sequential)",
                        "Premedications only"
                    ],
                    correct: 2
                },
                {
                    question: "What is J1200?",
                    options: [
                        "Remicade drug code",
                        "Benadryl drug code",
                        "Administration code",
                        "Modifier"
                    ],
                    correct: 1
                },
                {
                    question: "Why is modifier 59 needed on premedications?",
                    options: [
                        "To indicate wastage",
                        "To show IV administration",
                        "To prevent bundling with main infusion",
                        "It's not needed"
                    ],
                    correct: 2
                }
            ]
        },
        {
            id: 6,
            title: "Module 6: Common Scenarios & Mistakes",
            description: "Learn to avoid common billing errors through real-world examples.",
            content: `
                <h3>Common Billing Mistakes</h3>

                <h4>Mistake 1: Using J-Code for Biosimilars</h4>
                <p><strong>Wrong:</strong> Billing Inflectra as J1745 (Remicade code)</p>
                <p><strong>Right:</strong> Billing Inflectra as Q5103 (biosimilar code)</p>

                <h4>Mistake 2: Incorrect Billing Unit Conversion</h4>
                <p><strong>Wrong:</strong> Orencia 500 mg → J0129 × 500 units</p>
                <p><strong>Right:</strong> Orencia 500 mg → J0129 × 50 units (500÷10)</p>

                <h4>Mistake 3: Missing Wastage Modifier</h4>
                <p><strong>Wrong:</strong> J1745 × 40 units (no modifier)</p>
                <p><strong>Right:</strong> J1745-JZ × 40 units (if no waste) OR J1745-JW × 40 units (if waste)</p>

                <h4>Mistake 4: Using 96413 for Simponi Aria</h4>
                <p><strong>Wrong:</strong> Simponi Aria with 96413</p>
                <p><strong>Right:</strong> Simponi Aria with 96365 (non-time-based)</p>

                <h4>Mistake 5: Forgetting Modifier 59 on Premeds</h4>
                <p><strong>Wrong:</strong> 96374 (without modifier 59)</p>
                <p><strong>Right:</strong> 96374-59</p>

                <h4>Mistake 6: Not Verifying NDC from Vial</h4>
                <p><strong>Wrong:</strong> Using reference chart NDC without verification</p>
                <p><strong>Right:</strong> Verify NDC from actual vial label in infusion notes</p>

                <div class="callout callout-warning">
                    <strong>Top Denial Reasons:</strong>
                    <ol>
                        <li>Incorrect NDC (not verified from vial)</li>
                        <li>Wrong billing unit conversion</li>
                        <li>Missing wastage modifiers (JW/JZ)</li>
                        <li>Using J-code for biosimilars</li>
                        <li>Incorrect administration code timing</li>
                    </ol>
                </div>

                <h3>Complete Example: Remicade with Premeds</h3>
                <p><strong>Scenario:</strong></p>
                <ul>
                    <li>Patient weight: 80 kg</li>
                    <li>Dose: 5 mg/kg = 400 mg</li>
                    <li>Vials used: 4 × 100 mg = 400 mg (no waste)</li>
                    <li>Infusion time: 2 hours</li>
                    <li>Premeds: Benadryl 25mg IV, Solumedrol 125mg IV</li>
                </ul>

                <p><strong>Correct Billing:</strong></p>
                <ul>
                    <li>96374-59 (1st IV push - Benadryl)</li>
                    <li>96375-59 (2nd IV push - Solumedrol)</li>
                    <li>96413 (1st hour Remicade)</li>
                    <li>96415 (2nd hour Remicade)</li>
                    <li>J1200 × 1 (Benadryl)</li>
                    <li>J2919 × 1 (Solumedrol)</li>
                    <li>J1745-JZ × 40 units (Remicade, no waste)</li>
                </ul>
            `,
            questions: [
                {
                    question: "What is the #1 cause of infusion claim denials?",
                    options: [
                        "Wrong drug code",
                        "Incorrect NDC (not verified from vial)",
                        "Missing modifiers",
                        "Wrong patient name"
                    ],
                    correct: 1
                },
                {
                    question: "If you bill Inflectra as J1745, what happens?",
                    options: [
                        "Claim is paid",
                        "Claim is likely denied",
                        "Warning is issued",
                        "Nothing"
                    ],
                    correct: 1
                },
                {
                    question: "Orencia 750 mg should be billed as how many units?",
                    options: ["7.5 units", "75 units", "750 units", "7500 units"],
                    correct: 1
                },
                {
                    question: "What modifier is required when there is wastage?",
                    options: ["JA", "JZ", "JW", "59"],
                    correct: 2
                },
                {
                    question: "Simponi Aria uses which administration code?",
                    options: ["96413", "96415", "96365", "96374"],
                    correct: 2
                },
                {
                    question: "Premedications require which modifier?",
                    options: ["JA", "JW", "JZ", "59"],
                    correct: 3
                },
                {
                    question: "Where MUST the NDC be verified from?",
                    options: [
                        "Reference chart",
                        "Previous claim",
                        "Actual vial label in nursing notes",
                        "Drug database"
                    ],
                    correct: 2
                },
                {
                    question: "If wastage exists but no JW modifier is used, what happens?",
                    options: [
                        "Claim is paid in full",
                        "Claim may be denied",
                        "Nothing",
                        "Warning only"
                    ],
                    correct: 1
                },
                {
                    question: "Remicade 400 mg with 2-hour infusion uses which CPT codes?",
                    options: [
                        "96413 only",
                        "96413 + 96415",
                        "96365 + 96366",
                        "96413 + 96415 + 96415"
                    ],
                    correct: 1
                },
                {
                    question: "What is the correct billing for Benadryl 25mg IV premed?",
                    options: [
                        "96374 + J1200",
                        "96374-59 + J1200",
                        "96375-59 + J1200",
                        "Just J1200"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 7,
            title: "Final Comprehensive Exam",
            description: "Test your complete knowledge of infusion drug billing. 95% required to earn your certificate!",
            content: `
                <h3>Final Comprehensive Exam</h3>
                <p>This exam tests everything you've learned across all modules. You must score 95% or higher to earn your certification.</p>

                <div class="callout callout-success">
                    <strong>Good luck!</strong> Take your time and apply everything you've learned.
                </div>

                <h3>Exam Tips:</h3>
                <ul>
                    <li>Read each question carefully</li>
                    <li>Remember the 5-step billing process</li>
                    <li>Double-check billing unit conversions</li>
                    <li>Verify biosimilar vs original drug codes</li>
                    <li>Remember special cases (Simponi Aria, Cosentyx)</li>
                    <li>Don't forget modifiers!</li>
                </ul>
            `,
            questions: [
                {
                    question: "What are the TWO components of infusion drug billing?",
                    options: [
                        "Drug and physician",
                        "Drug and administration",
                        "Administration and facility",
                        "Drug and diagnosis"
                    ],
                    correct: 1
                },
                {
                    question: "Remicade 350 mg should be billed as how many units?",
                    options: ["3.5 units", "35 units", "350 units", "3500 units"],
                    correct: 1
                },
                {
                    question: "Actemra 480 mg should be billed as how many units?",
                    options: ["4.8 units", "48 units", "480 units", "4800 units"],
                    correct: 2
                },
                {
                    question: "Inflectra is billed with which code?",
                    options: ["J1745", "Q5103", "J9312", "Q5119"],
                    correct: 1
                },
                {
                    question: "Where MUST the NDC be verified from?",
                    options: [
                        "Reference chart",
                        "Previous claim",
                        "Actual vial label in infusion notes",
                        "Memory"
                    ],
                    correct: 2
                },
                {
                    question: "Which modifier indicates NO wastage?",
                    options: ["JA", "JW", "JZ", "59"],
                    correct: 2
                },
                {
                    question: "Which modifier indicates wastage EXISTS?",
                    options: ["JA", "JW", "JZ", "59"],
                    correct: 1
                },
                {
                    question: "A 1.5-hour infusion uses which codes?",
                    options: [
                        "96413 only",
                        "96413 + 96415",
                        "96365 + 96366",
                        "96413 + 96415 + 96415"
                    ],
                    correct: 1
                },
                {
                    question: "Simponi Aria uses which administration code?",
                    options: ["96413", "96415", "96365", "96374"],
                    correct: 2
                },
                {
                    question: "Orencia requires which special modifier?",
                    options: ["JW", "JZ", "JA", "59"],
                    correct: 2
                },
                {
                    question: "Cosentyx ALWAYS uses which modifier?",
                    options: ["JW", "JZ", "JA", "59"],
                    correct: 1
                },
                {
                    question: "Premedications require which modifier?",
                    options: ["JA", "JW", "JZ", "59"],
                    correct: 3
                },
                {
                    question: "The first IV push premed uses which code?",
                    options: ["96374", "96375", "96413", "96365"],
                    correct: 0
                },
                {
                    question: "Ruxience is a biosimilar to which drug?",
                    options: ["Remicade", "Rituxan", "Orencia", "Actemra"],
                    correct: 1
                },
                {
                    question: "Which has a 10 mg billing unit?",
                    options: ["Actemra", "Cosentyx", "Remicade", "Stelara"],
                    correct: 2
                },
                {
                    question: "Which has a 1 mg billing unit?",
                    options: ["Remicade", "Rituxan", "Orencia", "Actemra"],
                    correct: 3
                },
                {
                    question: "What is Step 4 in the billing process?",
                    options: [
                        "Identify drug",
                        "Determine dose",
                        "Calculate billing units",
                        "Calculate wastage"
                    ],
                    correct: 3
                },
                {
                    question: "If time is 1 hour 10 minutes, how many hours bill?",
                    options: ["1 hour", "1.5 hours", "2 hours", "Don't bill"],
                    correct: 2
                },
                {
                    question: "What is the #1 cause of claim denials?",
                    options: [
                        "Wrong drug",
                        "Incorrect NDC verification",
                        "Wrong doctor",
                        "Missing diagnosis"
                    ],
                    correct: 1
                },
                {
                    question: "96415 is used for what?",
                    options: [
                        "First hour",
                        "Additional hours after first",
                        "IV push",
                        "Non-chemo infusion"
                    ],
                    correct: 1
                }
            ]
        }
    ]
};

// State Management
let currentStudent = null;
let currentModule = null;
let currentQuestion = 0;
let userAnswers = [];
let courseProgress = {};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    updateOverallProgress();
});

// Screen Navigation
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function showWelcome() {
    showScreen('welcomeScreen');
}

function showModules() {
    renderModuleList();
    showScreen('moduleScreen');
}

// Start Course
function startCourse() {
    const nameInput = document.getElementById('studentName');
    const name = nameInput.value.trim();

    if (!name) {
        alert('Please enter your full name to continue.');
        return;
    }

    currentStudent = name;
    saveProgress();
    showModules();
}

// Module List
function renderModuleList() {
    const moduleList = document.getElementById('moduleList');
    moduleList.innerHTML = '';

    courseData.modules.forEach((module, index) => {
        const isCompleted = courseProgress[module.id]?.passed || false;
        const isLocked = index > 0 && !courseProgress[courseData.modules[index - 1].id]?.passed;
        const score = courseProgress[module.id]?.score;

        const moduleCard = document.createElement('div');
        moduleCard.className = `module-card ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}`;

        if (!isLocked) {
            moduleCard.onclick = () => showLesson(module.id);
        }

        moduleCard.innerHTML = `
            <div class="module-header">
                <div class="module-title">${module.title}</div>
                <div class="module-status ${isCompleted ? 'status-completed' : isLocked ? 'status-locked' : 'status-available'}">
                    ${isCompleted ? '✓ Completed' : isLocked ? '🔒 Locked' : 'Available'}
                </div>
            </div>
            <div class="module-description">${module.description}</div>
            ${isCompleted && score ? `<div class="module-score">Best Score: ${score}%</div>` : ''}
        `;

        moduleList.appendChild(moduleCard);
    });
}

// Lesson Display
function showLesson(moduleId) {
    currentModule = courseData.modules.find(m => m.id === moduleId);

    document.getElementById('lessonTitle').textContent = currentModule.title;
    document.getElementById('lessonContent').innerHTML = currentModule.content;

    showScreen('lessonScreen');
}

// Quiz
function startQuiz() {
    currentQuestion = 0;
    userAnswers = new Array(currentModule.questions.length).fill(null);

    document.getElementById('quizTitle').textContent = `${currentModule.title} - Quiz`;

    renderQuestion();
    showScreen('quizScreen');
}

function renderQuestion() {
    const question = currentModule.questions[currentQuestion];
    const totalQuestions = currentModule.questions.length;

    document.getElementById('quizProgress').textContent =
        `Question ${currentQuestion + 1} of ${totalQuestions}`;

    const container = document.getElementById('questionContainer');
    container.innerHTML = `
        <div class="question-text">${currentQuestion + 1}. ${question.question}</div>
        <div class="options">
            ${question.options.map((option, index) => `
                <div class="option ${userAnswers[currentQuestion] === index ? 'selected' : ''}"
                     onclick="selectAnswer(${index})">
                    <input type="radio"
                           name="answer"
                           value="${index}"
                           ${userAnswers[currentQuestion] === index ? 'checked' : ''}>
                    <label>${option}</label>
                </div>
            `).join('')}
        </div>
    `;

    // Update navigation buttons
    document.getElementById('prevBtn').style.display = currentQuestion === 0 ? 'none' : 'inline-block';
    document.getElementById('nextBtn').style.display = currentQuestion === totalQuestions - 1 ? 'none' : 'inline-block';
    document.getElementById('submitBtn').style.display = currentQuestion === totalQuestions - 1 ? 'inline-block' : 'none';
}

function selectAnswer(answerIndex) {
    userAnswers[currentQuestion] = answerIndex;
    renderQuestion();
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
}

function nextQuestion() {
    if (currentQuestion < currentModule.questions.length - 1) {
        currentQuestion++;
        renderQuestion();
    }
}

function submitQuiz() {
    // Check if all questions answered
    if (userAnswers.includes(null)) {
        alert('Please answer all questions before submitting.');
        return;
    }

    // Calculate score
    let correct = 0;
    currentModule.questions.forEach((q, index) => {
        if (userAnswers[index] === q.correct) {
            correct++;
        }
    });

    const score = Math.round((correct / currentModule.questions.length) * 100);
    const passed = score >= 95;

    // Save progress
    if (!courseProgress[currentModule.id] || score > (courseProgress[currentModule.id].score || 0)) {
        courseProgress[currentModule.id] = {
            score: score,
            passed: passed,
            attempts: (courseProgress[currentModule.id]?.attempts || 0) + 1
        };
        saveProgress();
    }

    // Show results
    showResults(score, passed, correct, currentModule.questions.length);
}

function showResults(score, passed, correct, total) {
    const resultsCard = document.getElementById('resultsCard');

    const isFinalExam = currentModule.id === 7;

    let reviewHTML = '<div class="question-review">';
    currentModule.questions.forEach((q, index) => {
        const isCorrect = userAnswers[index] === q.correct;
        reviewHTML += `
            <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="review-question">${index + 1}. ${q.question}</div>
                <div class="review-answer">
                    ${isCorrect ? '✓ Correct' : '✗ Incorrect'}<br>
                    Your answer: ${q.options[userAnswers[index]]}<br>
                    ${!isCorrect ? `Correct answer: ${q.options[q.correct]}` : ''}
                </div>
            </div>
        `;
    });
    reviewHTML += '</div>';

    resultsCard.innerHTML = `
        <h2>${currentModule.title}</h2>
        <div class="score-display ${passed ? 'pass' : 'fail'}">${score}%</div>
        <div class="result-message ${passed ? 'pass' : 'fail'}">
            ${passed ?
                (isFinalExam ?
                    '🎉 Congratulations! You passed the final exam!' :
                    '✓ You passed! Great job!') :
                '✗ You need 95% to pass. Please review the material and try again.'}
        </div>
        <p>You answered ${correct} out of ${total} questions correctly.</p>
        ${reviewHTML}
        <button class="btn ${passed ? 'btn-primary' : 'btn-secondary'}" onclick="${passed ? (isFinalExam ? 'showCertificate()' : 'showModules()') : 'showLesson(' + currentModule.id + ')'}">
            ${passed ? (isFinalExam ? 'Get Certificate' : 'Continue to Next Module') : 'Review Material & Retry'}
        </button>
    `;

    updateOverallProgress();
    showScreen('resultsScreen');
}

// Certificate
function showCertificate() {
    const container = document.getElementById('certificateContainer');
    const today = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    container.innerHTML = `
        <div class="certificate-content" id="certificate">
            <h1>Certificate of Completion</h1>
            <div class="cert-text">This certifies that</div>
            <div class="student-name">${currentStudent}</div>
            <div class="cert-text">has successfully completed the</div>
            <div class="course-title">Infusion Drug Billing Certification Course</div>
            <div class="cert-text">demonstrating proficiency in all aspects of infusion drug billing including:</div>
            <ul style="text-align: left; display: inline-block; margin: 20px 0;">
                <li>Billing unit conversion and J/Q-code selection</li>
                <li>NDC verification and wastage calculation</li>
                <li>Administration code timing and modifier usage</li>
                <li>Drug-specific requirements and common scenarios</li>
            </ul>
            <div class="cert-date">Issued on ${today}</div>
            <div class="cert-text" style="margin-top: 30px; font-size: 0.9rem;">
                <strong>Final Exam Score: ${courseProgress[7].score}%</strong>
            </div>
        </div>
    `;

    showScreen('certificateScreen');
}

function downloadCertificate() {
    alert('Certificate download feature: In a production environment, this would generate a PDF certificate. For now, please use your browser\'s Print function (Ctrl/Cmd + P) and save as PDF.');
    window.print();
}

// Progress Management
function saveProgress() {
    localStorage.setItem('infusionCourseStudent', currentStudent);
    localStorage.setItem('infusionCourseProgress', JSON.stringify(courseProgress));
}

function loadProgress() {
    currentStudent = localStorage.getItem('infusionCourseStudent');
    const savedProgress = localStorage.getItem('infusionCourseProgress');
    if (savedProgress) {
        courseProgress = JSON.parse(savedProgress);
    }

    if (currentStudent) {
        document.getElementById('studentName').value = currentStudent;
    }
}

function updateOverallProgress() {
    const totalModules = courseData.modules.length;
    const completedModules = Object.values(courseProgress).filter(p => p.passed).length;
    const percentage = Math.round((completedModules / totalModules) * 100);

    document.getElementById('overallProgress').style.width = percentage + '%';
    document.getElementById('progressText').textContent = `${percentage}% Complete (${completedModules}/${totalModules} modules)`;
}

function resetCourse() {
    if (confirm('Are you sure you want to reset your progress? This cannot be undone.')) {
        localStorage.removeItem('infusionCourseStudent');
        localStorage.removeItem('infusionCourseProgress');
        currentStudent = null;
        courseProgress = {};
        location.reload();
    }
}
