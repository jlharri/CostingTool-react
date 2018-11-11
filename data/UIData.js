#

var UIModel_JSON =
{
    "UIElement": [
      {
        "type": "section",
        "text": [
          "Uptake of PMTCT Services, Population, and Program Protocols Information",
          ""
        ],
        "textClass": "section"
      },
      {
        "type": "subsection",
        "text": [
          "Section 1:  Uptake of the PMTCT cascade",
          ""
        ],
        "textClass": "subsection"
      },
      {
        "type": "numInput",
        "id": "C5",
        "text": [
          "1.1a  Enter the number of births per year",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "bigNum",
        "value": "100"
      },
      {
        "type": "numInput",
        "id": "C6",
        "text": [
          "1.2a  Enter the percentage of pregnant women who access antenatal care at least once or deliver at a health facility",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "percent",
        "value": "1",
        "concat": "yes",
        "help": "Enter percent as decimal (ex, 0.5)"
      },
      {
        "type": "numCalc",
        "id": "G6",
        "text": [
          "1.2b  Number of pregnant women who access ANC at least once  or deliver at a health facility",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "smallNum",
        "calc": "=C5*C6"
      },
      {
        "type": "numInput",
        "id": "C7",
        "text": [
          "1.3a  Enter the percentage of pregnant women who receive HIV testing in antenatal care or labor and delivery",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "percent",
        "value": "1",
        "concat": "yes"
      },
      {
        "type": "numCalc",
        "id": "G7",
        "text": [
          "1.3b  Number of pregnant women who receive HIV testing in antenatal care or labor and delivery",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "smallNum",
        "calc": "=C5*C6*C7"
      },
      {
        "type": "numInput",
        "id": "C8",
        "text": [
          "1.4a  Enter the percentage of pregnant women in antenatal care or labor and delivery who test for HIV and receive results",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "percent",
        "value": "1",
        "concat": "yes"
      },
      {
        "type": "numCalc",
        "id": "G8",
        "text": [
          "1.4b  Number of pregnant women in antenatal care or labor and delivery who test for HIV and receive results",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "smallNum",
        "calc": "=C5*C6*C7*C8"
      },
      {
        "type": "numInput",
        "id": "C9",
        "text": [
          "1.5a  Enter the percentage of pregnant women who receive HIV test results that are positive",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "percent",
        "value": "1",
        "concat": "yes",
        "help": "Note: the antenatal HIV prevalence can be used to estimate this value"
      },
      {
        "type": "numCalc",
        "id": "G9",
        "text": [
          "1.5b  Number of pregnant women living with HIV who receive HIV positive test results",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "smallNum",
        "calc": "=C5*C6*C7*C8*C9"
      },
      {
        "type": "numInput",
        "id": "C10",
        "text": [
          "1.6a  Enter the percentage of HIV-positive pregnant women eligible for ART",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "percent",
        "value": "0.5",
        "concat": "yes"
      },
      {
        "type": "numCalc",
        "id": "G10",
        "text": [
          "1.6a1  Number of HIV-positive pregnant women eligible for ART",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "smallNum",
        "calc": "=G9*C10"
      },
      {
        "type": "numInput",
        "id": "C11",
        "text": [
          "1.6b  Enter the percentage of HIV-positive pregnant women eligible for ART that are already receiving ART in HIV care and treatment services",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "percent",
        "value": "0.05"
      },
      {
        "type": "numCalc",
        "id": "G11",
        "text": [
          "1.6b1  Percentage of HIV-positive pregnant women eligible for ART that will be newly initiated on ART",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "percent hidden",
        "calc": "=C10-C11"
      },
      {
        "type": "numCalc",
        "id": "C12",
        "text": [
          "1.6c  Percentage of HIV-positive pregnant women not eligible for ART to receive ARV prophylaxis",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "percent hidden",
        "calc": "=1-C10"
      },
      {
        "type": "numCalc",
        "id": "G12",
        "text": [
          "1.6e  Number of HIV-positive pregnant women not eligible for ART",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=G9*C12"
      },
      {
        "type": "numInput",
        "id": "C13",
        "text": [
          "1.7a  Enter the percentage of HIV-positive pregnant women not eligible for ART to receive Option A",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "percent",
        "value": "0.5",
        "concat": "yes"
      },
      {
        "type": "numCalc",
        "id": "G13",
        "text": [
          "1.7b  Number of HIV-positive pregnant women not eligible for ART to receive Option A",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "smallNum",
        "calc": "=G12*C13"
      },
      {
        "type": "numCalc",
        "id": "C14",
        "text": [
          "1.8a  Percentage of HIV-positive pregnant women not eligible for ART to receive Option B",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "percent",
        "calc": "=1-C13",
        "concat": "yes"
      },
      {
        "type": "numCalc",
        "id": "G14",
        "text": [
          "1.8b  Number of HIV-positive pregnant women not eligible for ART to receive Option B",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "smallNum",
        "calc": "=G12*C14"
      },
      {
        "type": "numInput",
        "id": "C15",
        "text": [
          "1.9a  Enter the percentage of HIV-positive  pregnant women that receive intrapartum prophylaxis",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "percent",
        "value": "1",
        "concat": "yes"
      },
      {
        "type": "numCalc",
        "id": "G15",
        "text": [
          "1.9b  Number of HIV-positive pregnant women that receive intrapartum prophylaxis",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "smallNum",
        "calc": "=G9*C15"
      },
      {
        "type": "numInput",
        "id": "C16",
        "text": [
          "1.10a  Enter the percentage of HIV-positive pregnant women that will receive post-partum prophylaxis",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "percent",
        "value": "1",
        "concat": "yes"
      },
      {
        "type": "numCalc",
        "id": "G16",
        "text": [
          "1.10b  Number of HIV-positive pregnant women that will receive post-partum prophylaxis",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "smallNum",
        "calc": "=G9*C16"
      },
      {
        "type": "subsection",
        "text": [
          "Section 2:  Timing of Antenatal HIV Diagnosis",
          ""
        ],
        "textClass": "subsection"
      },
      {
        "type": "numInput",
        "id": "C20",
        "text": [
          "2.1a  Enter the earliest timing in weeks  (Timing 1) when pregnant women are diagnosed with HIV at antenatal care",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "smallNum",
        "value": "14",
        "concat": "yes"
      },
      {
        "type": "numCalc",
        "id": "G20",
        "text": [
          "2.1b  Weeks of antenatal ART or antenatal prophylaxis for women diagnosed with HIV at Timing 1",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=36-C20"
      },
      {
        "type": "numInput",
        "id": "C21",
        "text": [
          "2.2a  Enter the percentage of pregnant women diagnosed with HIV at antenatal care at Timing 1 (weeks specified in 2.1a)",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "percent",
        "value": "0.25",
        "concat": "yes"
      },
      {
        "type": "numCalc",
        "id": "G21",
        "text": [
          "2.2b  Number of pregnant women diagnosed with HIV at Timing 1",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "smallNum",
        "calc": "=C21*G9"
      },
      {
        "type": "numInput",
        "id": "C23",
        "text": [
          "2.3a  Enter the second earliest timing in weeks (Timing 2) when pregnant women are diagnosed with HIV at antenatal care",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "smallNum",
        "value": "20",
        "concat": "yes"
      },
      {
        "type": "numCalc",
        "id": "G23",
        "text": [
          "2.3b  Weeks of antenatal ART or antenatal prophylaxis for women diagnosed with HIV at Timing 2",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=36-C23"
      },
      {
        "type": "numInput",
        "id": "C24",
        "text": [
          "2.4a  Enter the percentage of pregnant women diagnosed with HIV at antenatal care at Timing 2",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "percent",
        "value": "0.25",
        "concat": "yes"
      },
      {
        "type": "numCalc",
        "id": "G24",
        "text": [
          "2.4b  Number of pregnant women diagnosed with HIV at Timing 2",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "smallNum",
        "calc": "=G9*C24"
      },
      {
        "type": "numInput",
        "id": "C26",
        "text": [
          "2.5a  Enter the third earliest  timing in weeks (Timing 3) when pregnant women are diagnosed with HIV at antenatal care",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "smallNum",
        "value": "28",
        "concat": "yes"
      },
      {
        "type": "numCalc",
        "id": "G26",
        "text": [
          "2.5b  Weeks of antenatal ART or antenatal prophylaxis for women diagnosed with HIV at Timing 3",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=36-C26"
      },
      {
        "type": "numInput",
        "id": "C27",
        "text": [
          "2.6a  Enter the percentage of pregnant women diagnosed with HIV at antenatal care at Timing 3",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "percent",
        "value": "0.25",
        "concat": "yes"
      },
      {
        "type": "numCalc",
        "id": "G27",
        "text": [
          "2.6b  Number of pregnant women diagnosed with HIV at Timing 3",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "smallNum",
        "calc": "=G9*C27"
      },
      {
        "type": "numInput",
        "id": "C29",
        "text": [
          "2.7  Enter the percentage of the total population of pregnant women diagnosed with HIV at Labor",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "percent",
        "value": "0.25",
        "concat": "yes"
      },
      {
        "type": "numCalc",
        "id": "G29",
        "text": [
          "2.7b  Number of pregnant women diagnosed with HIV at Labor",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "smallNum",
        "calc": "=C29*G9"
      },
      {
        "type": "subsection",
        "text": [
          "Section 3:  Demographic Information",
          ""
        ],
        "textClass": "subsection"
      },
      {
        "type": "numInput",
        "id": "C33",
        "text": [
          "3.1a  Enter the percentage of infants with a  birth weight between 2000-2499 g",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "percent",
        "value": "0.5",
        "concat": "yes"
      },
      {
        "type": "numCalc",
        "id": "G33",
        "text": [
          "3.1b  Number of infants with birthweight between 2000-2499 g",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=G9*C33"
      },
      {
        "type": "numCalc",
        "id": "C35",
        "text": [
          "3.2a Percentage of infants with a birth weight > 2499 g.",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "percent",
        "calc": "=1-C33",
        "concat": "yes"
      },
      {
        "type": "numCalc",
        "id": "G35",
        "text": [
          "3.2b  Number of infants with a  birthweight > 2499 g",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=G9-G33"
      },
      {
        "type": "numInput",
        "id": "C37",
        "text": [
          "3.3a  Enter the percentage of women receiving antiretroviral prophylaxis or treatment that exclusively breastfeed their infants",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "percent",
        "value": "0.9",
        "concat": "yes"
      },
      {
        "type": "numCalc",
        "id": "G37",
        "text": [
          "3.3b  Percentage of women receiving antiretroviral prophylaxis or treatment that exclusively replacement feed their infants",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "percent",
        "calc": "=1-C37"
      },
      {
        "type": "numInput",
        "id": "C39",
        "text": [
          "3.4 Enter the average duration of breastfeeding (in weeks)",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "smallNum"
      },
      {
        "type": "subsection",
        "text": [
          "Section 4:  Program Protocols and Antiretroviral Drug Regimens and Costs",
          ""
        ],
        "textClass": "subsection"
      },
      {
        "type": "label",
        "text": [
          "Program Protocols",
          ""
        ],
        "textClass": "largeBold"
      },
      {
        "type": "numInput",
        "id": "C46",
        "text": [
          "4.1a  Enter the average amount of time in weeks that it takes between diagnosis and the start of ART (waiting period for ART)",
          ""
        ],
        "inputClass": "smallNum",
        "value": "1"
      },
      {
        "type": "numInput",
        "id": "C47",
        "text": [
          "4.2a  Enter the average amount of time in weeks that it takes between diagnosis and the start of Option A (waiting period for Option A)",
          ""
        ],
        "inputClass": "smallNum",
        "value": "1"
      },
      {
        "type": "numInput",
        "id": "C48",
        "text": [
          "4.3a  Enter the average amount of time in weeks that it takes between diagnosis and the start of Option B (waiting period for Option B)",
          ""
        ],
        "inputClass": "smallNum",
        "value": "1"
      },
      {
        "type": "numInput",
        "id": "C49",
        "text": [
          "4.4  Enter the duration in weeks of post-partum ART covered under the PMTCT program for women eligible for ART",
          ""
        ],
        "inputClass": "smallNum",
        "value": "24"
      },
      {
        "type": "label",
        "text": [
          "Maternal ART",
          ""
        ],
        "textClass": "largeBold"
      },
      {
        "type": "label",
        "text": [
          "Antiretroviral Drug Regimen Choices",
          ""
        ],
        "textClass": "normalBold",
        "concat": "yes"
      },
      {
        "type": "label",
        "text": [
          "Weekly Cost of Antiretroviral  Regimen Selected",
          ""
        ],
        "textClass": "normalBold"
      },
      {
        "type": "select",
        "text": [
          "4.5a  Select from the drop down menu the most common maternal ART Regimen used in country and enter the weekly cost of the regimen selected.",
          ""
        ],
        "concat": "yes"
      },
      {
        "type": "option",
        "text": [
          "1. AZT (300mg) twice daily + 3TC (150 mg) twice daily + NVP (200mg) once daily",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "option",
        "text": [
          "2. AZT (330mg) twice daily +3TC (150mg) twice daily +EFV (600 mg) once daily",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "option",
        "text": [
          "3. TDF (300 mg) once daily + 3TC (300 mg) once daily + EFV (600 mg) once daily",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "option",
        "text": [
          "4. TDF (300 mg) once daily + FTC (200 mg) once daily + EFV (600 mg) once daily",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "option",
        "text": [
          "5. TDF (300 mg) once daily + 3TC (150 mg) twice daily +NVP (200 mg) twice daily",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "option",
        "text": [
          "6. TDF (300 mg) once daily + FTC (200 mg) once daily + NVP (200 mg) twice daily",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "endSelect"
      },
      {
        "type": "numInput",
        "id": "G54",
        "text": [
          "Enter the cost for this regimen.",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "bigNum currency",
        "value": "2"
      },
      {
        "type": "numInput",
        "id": "K54",
        "text": [
          "4.5b  Enter the percentage of pregnant women eligible for ART that will receive this ART regimen.",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "percent",
        "value": "0.5"
      },
      {
        "type": "select",
        "text": [
          "4.5c  Select from the drop down menu the second most common maternal ART Regimen used in country and enter the weekly cost of the regimen selected.",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "select",
        "concat": "yes"
      },
      {
        "type": "option",
        "text": [
          "1. AZT (300mg) twice daily + 3TC (150 mg) twice daily + NVP (200mg) once daily",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "option",
        "text": [
          "2. AZT (330mg) twice daily +3TC (150mg) twice daily +EFV (600 mg) once daily",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "option",
        "text": [
          "3. TDF (300 mg) once daily + 3TC (300 mg) once daily + EFV (600 mg) once daily",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "option",
        "text": [
          "4. TDF (300 mg) once daily + FTC (200 mg) once daily + EFV (600 mg) once daily",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "option",
        "text": [
          "5. TDF (300 mg) once daily + 3TC (150 mg) twice daily +NVP (200 mg) twice daily",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "option",
        "text": [
          "6. TDF (300 mg) once daily + FTC (200 mg) once daily + NVP (200 mg) twice daily",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "endSelect"
      },
      {
        "type": "numInput",
        "id": "G55",
        "text": [
          "Enter the cost for this regimen.",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "bigNum currency",
        "value": "2"
      },
      {
        "type": "numInput",
        "id": "K55",
        "text": [
          "4.5d  Enter the percentage of pregnant women eligible for ART that will receive this ART regimen.",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "percent",
        "value": "0.5"
      },
      {
        "type": "label",
        "text": [
          "Maternal Prophylaxis Option A",
          ""
        ],
        "textClass": "normalBold"
      },
      {
        "type": "numInput",
        "id": "G57",
        "text": [
          "4.6a  Enter the weekly cost of the maternal antenatal Option A regimen: AZT (300 mg) twice daily",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "bigNum currency",
        "value": "2"
      },
      {
        "type": "numInput",
        "id": "G58",
        "text": [
          "4.6b  Enter the cost of the maternal intra-partum Option A regimen: sd-NVP at onset of labor and AZT+3TC during labor and delivery",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "bigNum currency",
        "value": "2"
      },
      {
        "type": "numInput",
        "id": "G59",
        "text": [
          "4.6c  Enter the cost of the maternal post-partum Option A regimen: AZT + 3TC for 7 days",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "bigNum currency",
        "value": "1"
      },
      {
        "type": "label",
        "text": [
          "Maternal Prophylaxis Option B",
          ""
        ],
        "textClass": "normalBold"
      },
      {
        "type": "select",
        "text": [
          "4.7  Select from the drop down menu the maternal Option B regimen used in country and enter the weekly cost of the regimen selected.",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "select",
        "concat": "yes"
      },
      {
        "type": "option",
        "text": [
          "1. AZT (300mg) twice daily + 3TC (150mg) twice daily + LPV/r 400/100 (mg) twice daily",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "option",
        "text": [
          "2. AZT (300mg) twice daily + 3TC (150mg) twice daily + ABC (300 mg) twice daily",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "option",
        "text": [
          "3. AZT (300mg) twice daily + 3TC (150 mg) twice daily + EFV (600 mg) once daily",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "option",
        "text": [
          "4. TDF (300 mg) once daily + 3TC (150 mg) twice daily  + EFV (600 mg) once daily",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "option",
        "text": [
          "5. TDF (300 mg) once daily + FTC (200 mg) once daily  + EFV (600 mg) once daily",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "endSelect"
      },
      {
        "type": "numInput",
        "id": "G61",
        "text": [
          "Enter the cost for this regimen.",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "bigNum currency",
        "value": "2"
      },
      {
        "type": "label",
        "text": [
          "Infant Prophylaxis (birthweight between 2000-2499g)",
          ""
        ],
        "textClass": "normalBold"
      },
      {
        "type": "select",
        "text": [
          "4.8a  Select from the drop down menu the infant prophylaxis regimen for Maternal ART or Option B all exposed infants and enter the cost of the complete course of the regimen selected.",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "select",
        "concat": "yes"
      },
      {
        "type": "option",
        "text": [
          "1. Birth to 6 weeks: NVP (10 mg)once daily if birth weight 2000-2499 g)",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "option",
        "text": [
          "2. Birth to 6 weeks: AZT (10 mg) twice daily if birth weight 2000-2499 g)",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "endSelect"
      },
      {
        "type": "numInput",
        "id": "G63",
        "text": [
          "Enter the cost for this regimen.",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "bigNum currency",
        "value": "2"
      },
      {
        "type": "numInput",
        "id": "G64",
        "text": [
          "4.8b  Enter the cost of the complete course of the infant Option A regimen for breast-feeding infants in accordance with the duration of breastfeeding specified in 3.4 0 to 6 weeks:  NVP (10 mg) once daily + 6 weeks to 6 months: NVP (20 mg) once daily + 6 months to 9 months:  NVP  (30 mg) once daily + 9 months until one week following cessation of breastfeeding NVP (40 mg) once daily",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "bigNum currency",
        "value": "2"
      },
      {
        "type": "select",
        "text": [
          "4.8c  Select from the drop down menu the infant Option A regimen for non-breastfeeding infants and enter the cost of the complete course of the regimen selected.",
          ""
        ],
        "textClass": "numInput",
        "concat": "yes"
      },
      {
        "type": "option",
        "text": [
          "1. Birth to 6 weeks: NVP (10 mg)once daily if birth weight 2000-2499 g)",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "option",
        "text": [
          "2. Birth to 6 weeks:  AZT (10 mg) twice daily if birth weight 2000-2499 g)",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "endSelect"
      },
      {
        "type": "numInput",
        "id": "G65",
        "text": [
          "Enter the cost for this regimen.",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "bigNum currency",
        "value": "2"
      },
      {
        "type": "label",
        "text": [
          "Infant Prophylaxis (birthweight >2499g)",
          ""
        ],
        "textClass": "normalBold"
      },
      {
        "type": "select",
        "text": [
          "4.9a  Select from the drop down menu the infant prophylaxis regimen for Maternal ART or Option B all exposed infants and enter the cost of the complete course of the regimen selected.",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "select",
        "concat": "yes"
      },
      {
        "type": "option",
        "text": [
          "1. Birth to 6 weeks:  NVP (15 mg) once daily if birth weight    > 2499 g)",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "option",
        "text": [
          "2. Birth to 6 weeks:  AZT (15 mg) twice daily if birth weight    > 2499 g)",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "endSelect"
      },
      {
        "type": "numInput",
        "id": "G68",
        "text": [
          "Enter the cost for this regimen.",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "bigNum currency",
        "value": "2"
      },
      {
        "type": "select",
        "text": [
          "4.9b  Enter the cost of the complete course of the infant Option A regimen for breast-feeding infants in accordance with the duration of breastfeeding specified in 3.4",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "select",
        "concat": "yes"
      },
      {
        "type": "option",
        "text": [
          "1. Birth to 6 weeks:  NVP (15 mg) once daily if birth weight    > 2499 g)",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "option",
        "text": [
          "2. Birth to 6 weeks:  AZT (15 mg) twice daily if birth weight    > 2499 g)",
          ""
        ],
        "textClass": "option"
      },
      {
        "type": "endSelect"
      },
      {
        "type": "numInput",
        "id": "G69",
        "text": [
          "Enter the cost for this regimen.",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "bigNum currency",
        "value": "10"
      },
      {
        "type": "numInput",
        "id": "G70",
        "text": [
          "4.9c Enter the cost of the complete course of the infant Option A regimen for non-breastfeeding infants. 0 to 6 weeks:  NVP (15 mg) once daily + 6 weeks to 6 months: NVP (20 mg) once daily + 6 months to 9 months:  NVP  (30 mg) once daily + 9 months to end of breastfeeding (40 mg) once daily",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "bigNum currency",
        "value": "2"
      },
      {
        "type": "section",
        "text": [
          "Other Program Costs",
          ""
        ],
        "textClass": "section"
      },
      {
        "type": "subsection",
        "text": [
          "Section 5:  Commodities",
          ""
        ],
        "textClass": "subsection"
      },
      {
        "type": "label",
        "text": [
          "In this section specify commodities (cost per unit and quantity) necessary to implement the revised PMTCT guidelines in the context for which this costing estimation analysis is being conducted.  Some suggestions are included, which can be modified or replaced as necessary in accordance with context specific scale-up needs.",
          ""
        ],
        "textClass": "smallBold"
      },
      {
        "type": "label",
        "text": [
          "Commodity",
          ""
        ],
        "textClass": "normalBold"
      },
      {
        "type": "unitcost",
        "id": "E79",
        "text": [
          "5.1  HIV rapid test",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "smallNum currency"
      },
      {
        "type": "unitcost",
        "id": "E80",
        "text": [
          "5.2  CD4 test",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "smallNum currency"
      },
      {
        "type": "unitcost",
        "id": "E81",
        "text": [
          "5.3  CD4 Reagents",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "smallNum currency"
      },
      {
        "type": "unitcost",
        "id": "E82",
        "text": [
          "5.4  Hemoglobin test",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "smallNum currency"
      },
      {
        "type": "unitcost",
        "id": "E83",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other commodity"
      },
      {
        "type": "unitcost",
        "id": "E84",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other commodity"
      },
      {
        "type": "unitcost",
        "id": "E85",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other commodity"
      },
      {
        "type": "unitcost",
        "id": "E86",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other commodity"
      },
      {
        "type": "unitcost",
        "id": "E87",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other commodity"
      },
      {
        "type": "unitcost",
        "id": "E88",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other commodity"
      },
      {
        "type": "numCalc",
        "id": "E89",
        "text": [
          "Subtotal Commodity Costs",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "bigNum currency",
        "calc": "=SUM(E79:E88)"
      },
      {
        "type": "subsection",
        "text": [
          "Section 6:  Equipment",
          ""
        ],
        "textClass": "subsection"
      },
      {
        "type": "label",
        "text": [
          "In this section specify equipment (cost per unit and quantity) necessary to implement the revised PMTCT guidelines in the context for which this costing estimation analysis is being conducted.  Some suggestions are included, which can be modified or replaced as necessary in accordance with context specific scale up needs.",
          ""
        ],
        "textClass": "smallBold"
      },
      {
        "type": "label",
        "text": [
          "Equipment",
          ""
        ],
        "textClass": "normalBold"
      },
      {
        "type": "unitcost",
        "id": "E96",
        "text": [
          "6.1  CD4 Machine",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "smallNum currency"
      },
      {
        "type": "unitcost",
        "id": "E97",
        "text": [
          "6.2  CD4 Point of Care Machine",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "smallNum currency"
      },
      {
        "type": "unitcost",
        "id": "E98",
        "text": [
          "6.3  Hemoglobinometer",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "smallNum currency"
      },
      {
        "type": "unitcost",
        "id": "E99",
        "text": [
          "6.4  Vehicle",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "smallNum currency"
      },
      {
        "type": "unitcost",
        "id": "E100",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other equipment"
      },
      {
        "type": "unitcost",
        "id": "E101",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other equipment"
      },
      {
        "type": "unitcost",
        "id": "E102",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other equipment"
      },
      {
        "type": "unitcost",
        "id": "E103",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other equipment"
      },
      {
        "type": "unitcost",
        "id": "E104",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other equipment"
      },
      {
        "type": "unitcost",
        "id": "E105",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other equipment"
      },
      {
        "type": "numCalc",
        "id": "E106",
        "text": [
          "Subtotal Equipment Costs",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "bigNum currency",
        "calc": "=SUM(E96:E105)"
      },
      {
        "type": "subsection",
        "text": [
          "Section 7:  Supplies",
          ""
        ],
        "textClass": "subsection"
      },
      {
        "type": "label",
        "text": [
          "In this section specify supplies (cost per unit and quantity) necessary to implement the revised PMTCT guidelines in the context for which this costing analysis is being conducted.  Some suggestions are included.  Some suggestions are included, which can be modified or replaced as necessary in accordance with context specific scale up needs.",
          ""
        ],
        "textClass": "smallBold"
      },
      {
        "type": "label",
        "text": [
          "Supply",
          ""
        ],
        "textClass": "normalBold"
      },
      {
        "type": "unitcost",
        "id": "E111",
        "text": [
          "7.1  Stablizer tubes (blood collection for CD4)",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "smallNum currency"
      },
      {
        "type": "unitcost",
        "id": "E112",
        "text": [
          "7.2  Infant Feeding Commodities",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "smallNum currency"
      },
      {
        "type": "unitcost",
        "id": "E113",
        "text": [
          "7.3  Infant PCR Testing",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "smallNum currency"
      },
      {
        "type": "unitcost",
        "id": "E114",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other supply"
      },
      {
        "type": "unitcost",
        "id": "E115",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other supply"
      },
      {
        "type": "unitcost",
        "id": "E116",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other supply"
      },
      {
        "type": "unitcost",
        "id": "E117",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other supply"
      },
      {
        "type": "unitcost",
        "id": "E118",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other supply"
      },
      {
        "type": "unitcost",
        "id": "E119",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other supply"
      },
      {
        "type": "unitcost",
        "id": "E120",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other supply"
      },
      {
        "type": "numCalc",
        "id": "E121",
        "text": [
          "Subtotal Supplies Cost",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "bigNum currency",
        "calc": "=SUM(E111:E120)"
      },
      {
        "type": "subsection",
        "text": [
          "Section 8:  Other direct costs",
          ""
        ],
        "textClass": "subsection"
      },
      {
        "type": "label",
        "text": [
          "In this section specify other direct costs (cost per unit and quantity) to implement the revised PMTCT guidelines in the context for which this costing analysis is being conducted.  Some suggestions are included.  Some suggestions are included, which can be modified or replaced as necessary in accordance with context specific scale up needs.",
          ""
        ],
        "textClass": "smallBold"
      },
      {
        "type": "label",
        "text": [
          "Other Direct Cost",
          ""
        ],
        "textClass": "normalBold"
      },
      {
        "type": "unitcost",
        "id": "E126",
        "text": [
          "8.1  Vehicle Fuel",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "smallNum currency"
      },
      {
        "type": "unitcost",
        "id": "E127",
        "text": [
          "8.2  Vehicle Insurance",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "smallNum currency"
      },
      {
        "type": "unitcost",
        "id": "E128",
        "text": [
          "8.3  Vehicle Maintenance",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "smallNum currency"
      },
      {
        "type": "unitcost",
        "id": "E129",
        "text": [
          "8.4  IEC Materials",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "smallNum currency"
      },
      {
        "type": "unitcost",
        "id": "E130",
        "text": [
          "8.5  Community Sensatization",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "smallNum currency"
      },
      {
        "type": "unitcost",
        "id": "E131",
        "text": [
          "8.6  Printing of Revised National Guidelines",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "smallNum currency"
      },
      {
        "type": "unitcost",
        "id": "E132",
        "text": [
          "8.7  Printing of Revised registries",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "smallNum currency"
      },
      {
        "type": "unitcost",
        "id": "E133",
        "text": [
          "8.8  Printing of revised job aides",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "smallNum currency"
      },
      {
        "type": "unitcost",
        "id": "E134",
        "text": [
          "8.9  Renovation of clinics",
          ""
        ],
        "textClass": "numInput",
        "inputClass": "smallNum currency"
      },
      {
        "type": "unitcost",
        "id": "E135",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other direct"
      },
      {
        "type": "unitcost",
        "id": "E136",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other direct"
      },
      {
        "type": "unitcost",
        "id": "E137",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other direct"
      },
      {
        "type": "unitcost",
        "id": "E138",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other direct"
      },
      {
        "type": "unitcost",
        "id": "E139",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other direct"
      },
      {
        "type": "unitcost",
        "id": "E140",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other direct"
      },
      {
        "type": "numCalc",
        "id": "E141",
        "text": [
          "Subtotal Other Direct Costs",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "bigNum currency",
        "calc": "=SUM(E126:E140)"
      },
      {
        "type": "subsection",
        "text": [
          "Section 9:  Personnel",
          ""
        ],
        "textClass": "subsection"
      },
      {
        "type": "label",
        "text": [
          "In this section specify other personnel costs (cost per unit and quantity) to implement the revised PMTCT guidelines in the context for which this costing analysis is being conducted.Considerations:� What additional staff are needed in the context of implementing the revised guidelines?� Evaluate status of current staffing and gaps:o Public health officers, Nurses, Midwives, Dispensers, Laboratory Technicians, Health Information Assistants, Counselors",
          ""
        ],
        "textClass": "smallBold"
      },
      {
        "type": "label",
        "text": [
          "Personnel Costs",
          ""
        ],
        "textClass": "normalBold"
      },
      {
        "type": "unitcost",
        "id": "E146",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other personnel"
      },
      {
        "type": "unitcost",
        "id": "E147",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other personnel"
      },
      {
        "type": "unitcost",
        "id": "E148",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other personnel"
      },
      {
        "type": "unitcost",
        "id": "E149",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other personnel"
      },
      {
        "type": "unitcost",
        "id": "E150",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other personnel"
      },
      {
        "type": "unitcost",
        "id": "E151",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other personnel"
      },
      {
        "type": "unitcost",
        "id": "E152",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other personnel"
      },
      {
        "type": "unitcost",
        "id": "E153",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other personnel"
      },
      {
        "type": "unitcost",
        "id": "E154",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other personnel"
      },
      {
        "type": "unitcost",
        "id": "E155",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other personnel"
      },
      {
        "type": "numCalc",
        "id": "E156",
        "text": [
          "Subtotal Personnel Costs",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "bigNum currency",
        "calc": "=SUM(E146:E155)"
      },
      {
        "type": "subsection",
        "text": [
          "Section 10:  Training",
          ""
        ],
        "textClass": "subsection"
      },
      {
        "type": "label",
        "text": [
          "Note: In this section specify other training costs (cost per unit and quantity) to implement the revised PMTCT guidelines in the context for which this costing analysis is being conducted.Considerations:� Potential trainings:  PMTCT counseling, testing, family planning methods for people living with HIV, ARV prophylaxis dispensation based on revised guidelines, infant and young child feeding in the context of HIV based on the revised WHO guidelines, CD4 testing and EID for laboratory staff on revised WHO guidelines, training for management/ pharmacy staff on logistics and supply chain management� Considerations for deciding which trainings to hold:  total staff assigned to this area, current staff expertise, gaps, possibility for integration with other ongoing trainings/ refresher courses� Considerations for costs associated with trainings: number of days, costs of venue, payment for trainers, travel, materials, certificates, per diem",
          ""
        ],
        "textClass": "smallBold"
      },
      {
        "type": "label",
        "text": [
          "Training Costs",
          ""
        ],
        "textClass": "normalBold"
      },
      {
        "type": "unitcost",
        "id": "E161",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other trainings"
      },
      {
        "type": "unitcost",
        "id": "E162",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other trainings"
      },
      {
        "type": "unitcost",
        "id": "E163",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other trainings"
      },
      {
        "type": "unitcost",
        "id": "E164",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other trainings"
      },
      {
        "type": "unitcost",
        "id": "E165",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other trainings"
      },
      {
        "type": "unitcost",
        "id": "E166",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other trainings"
      },
      {
        "type": "unitcost",
        "id": "E167",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other trainings"
      },
      {
        "type": "unitcost",
        "id": "E168",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other trainings"
      },
      {
        "type": "unitcost",
        "id": "E169",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other trainings"
      },
      {
        "type": "unitcost",
        "id": "E170",
        "textClass": "numInput",
        "inputClass": "smallNum currency",
        "help": "Please specify other trainings"
      },
      {
        "type": "numCalc",
        "id": "E171",
        "text": [
          "Subtotal Training Costs",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "bigNum currency",
        "calc": "=SUM(E161:E170)"
      },
      {
        "type": "label",
        "text": [
          "Hidden Cost Calculations",
          ""
        ],
        "textClass": "hidden"
      },
      {
        "type": "numCalc",
        "id": "C213",
        "text": [
          "Regimen 1",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=(G21*G11)*(G20-C46)*G54*K54",
        "help": "Antenatal ART for women diagnosed at Timing 1"
      },
      {
        "type": "numCalc",
        "id": "C214",
        "text": [
          "Regimen 2",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=(G21*G11)*(G20-C46)*G55*K55",
        "help": "ditto"
      },
      {
        "type": "numCalc",
        "id": "C216",
        "text": [
          "Regimen 1",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=(G24*G11)*(G23-C46)*G54*K54",
        "help": "Antenatal ART for women diagnosed at Timing 2"
      },
      {
        "type": "numCalc",
        "id": "C217",
        "text": [
          "Regimen 2",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=(G24*G11)*(G23-C46)*G55*K55",
        "help": "ditto"
      },
      {
        "type": "numCalc",
        "id": "C219",
        "text": [
          "Regimen 1",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=(G27*G11)*(G26-C46)*G54*K54",
        "help": "Antenatal ART for women diagnosed at Timing 3"
      },
      {
        "type": "numCalc",
        "id": "C220",
        "text": [
          "Regimen 2",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=(G27*G11)*(G26-C46)*G55*K55",
        "help": "ditto"
      },
      {
        "type": "numCalc",
        "id": "C222",
        "text": [
          "Regimen 1",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=(G29*G11)*(C49-C46)*G54*K54",
        "help": "Post-Natal ART for women diagnosed at L&D"
      },
      {
        "type": "numCalc",
        "id": "C223",
        "text": [
          "Regimen 2",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=(G29*G11)*(C49-C46)*G55*K55",
        "help": "ditto"
      },
      {
        "type": "numCalc",
        "id": "C225",
        "text": [
          "Regimen 1",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=((G21+G24+G27)*G11)*C49*G54*K54",
        "help": "Post-Natal Maternal ART Costs for women diagnosed at Timings 1, 2, and 3"
      },
      {
        "type": "numCalc",
        "id": "C226",
        "text": [
          "Regimen 2",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=((G21+G24+G27)*G11)*C49*G55*K55",
        "help": "ditto"
      },
      {
        "type": "numCalc",
        "id": "C227",
        "text": [
          "Total Maternal ART Components",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=SUM(C213:C226)"
      },
      {
        "type": "numCalc",
        "id": "C230",
        "text": [
          "Antenatal Option A for women diagnosed at Timing 1",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=(G21*C12*C13)*(G20-C47)*G57"
      },
      {
        "type": "numCalc",
        "id": "C231",
        "text": [
          "Antenatal Option A for women diagnosed at Timing 2",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=(G24*C12*C13)*(G23-C47)*G57"
      },
      {
        "type": "numCalc",
        "id": "C232",
        "text": [
          "Antenatal Option A for women diagnosed at Timing 3",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=(G27*C12*C13)*(G26-C47)*G54"
      },
      {
        "type": "numCalc",
        "id": "C233",
        "text": [
          "Intra-partum Option A",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=(G21+G24+G27+G29)*C12*C13*C15*G58"
      },
      {
        "type": "numCalc",
        "id": "C234",
        "text": [
          "Post-Partum Option A",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=(G29+G27+G24+G21)*C14*C13*C16*G59"
      },
      {
        "type": "numCalc",
        "id": "C235",
        "text": [
          "Total Maternal Option A",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=SUM(C230:C234)"
      },
      {
        "type": "numCalc",
        "id": "C238",
        "text": [
          "Antenatal Option B for women diagnosed at Timing 1",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=(G21*C12*C14)*(G20-C48)*G61"
      },
      {
        "type": "numCalc",
        "id": "C239",
        "text": [
          "Antenatal Option B for women diagnosed at Timing 2",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=(G24*C12*C14)*(G23-C48)*G61"
      },
      {
        "type": "numCalc",
        "id": "C240",
        "text": [
          "Antenatal Option B for women diagnosed at Timing 3",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=(G27*C12*C14)*(G26-C48)*G61"
      },
      {
        "type": "numCalc",
        "id": "C241",
        "text": [
          "Post-Partum Option B/ Breastfeeding",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=(G29+G27+G24+G21)*C12*C14*C37*C39*G61"
      },
      {
        "type": "numCalc",
        "id": "C242",
        "text": [
          "Total Maternal Option B",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=SUM(C238:C241)"
      },
      {
        "type": "numCalc",
        "id": "C245",
        "text": [
          "Infants with birthweight between 2000-2499 g",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=(G9*G11)*C33*G63"
      },
      {
        "type": "numCalc",
        "id": "C246",
        "text": [
          "Infants with birthweight               > 2499 g",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=(G9*G11)*C35*G68"
      },
      {
        "type": "numCalc",
        "id": "C247",
        "text": [
          "Total Infant Prophylaxis Maternal ART",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=C245+C246"
      },
      {
        "type": "numCalc",
        "id": "C249",
        "text": [
          "Infant Prophylaxis Option A (Breastfeeding) (birth weight between 2000-2499 g)",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=G13*C33*G64"
      },
      {
        "type": "numCalc",
        "id": "C250",
        "text": [
          "Infant Prophylaxis Option A (Breastfeeding) (birth weight  > 2499 g)",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=G13*C35*G69"
      },
      {
        "type": "numCalc",
        "id": "C251",
        "text": [
          "Infant Prophylaxis Option A (Non- Breastfeeding) (birth weight between 2000-2499 g)",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=(G13*C33)*G37*G65"
      },
      {
        "type": "numCalc",
        "id": "C252",
        "text": [
          "Infant Prophylaxis Option A (Non- Breastfeeding) (birthweight > 2499 g)",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=(G13*C35)*G37*G65"
      },
      {
        "type": "numCalc",
        "id": "C253",
        "text": [
          "Total Infant Prophylaxis Option A",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=SUM(C249:C252)"
      },
      {
        "type": "numCalc",
        "id": "C256",
        "text": [
          "Infant Prophylaxis Option B  (birth weight between 2000-2499 g)",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=(G14*C33)*G63"
      },
      {
        "type": "numCalc",
        "id": "C257",
        "text": [
          "Infant Prophylaxis Option B  (birthweight > 2499 g)",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=(G14*C35)*G68"
      },
      {
        "type": "numCalc",
        "id": "C258",
        "text": [
          "Total Infant Prophylaxis Option B",
          ""
        ],
        "textClass": "hidden",
        "inputClass": "hidden",
        "calc": "=C256+C257"
      },
      {
        "type": "section",
        "text": [
          "Results/ Cost Estimation",
          ""
        ],
        "textClass": "section"
      },
      {
        "type": "subsection",
        "text": [
          "Results",
          ""
        ],
        "textClass": "subsection"
      },
      {
        "type": "label",
        "text": [
          "A.  Drug Costs",
          ""
        ],
        "textClass": "largeBold"
      },
      {
        "type": "label",
        "text": [
          "A.1  Maternal Prophyalxis and ART",
          ""
        ],
        "textClass": "normalBold"
      },
      {
        "type": "numCalc",
        "id": "C177",
        "text": [
          "A.1.1  Maternal ART",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "bigNum currency",
        "calc": "=C227"
      },
      {
        "type": "numCalc",
        "id": "C178",
        "text": [
          "A.1.2  Maternal Option A",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "bigNum currency",
        "calc": "=C235"
      },
      {
        "type": "numCalc",
        "id": "C179",
        "text": [
          "A.1.3  Maternal Option B",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "bigNum currency",
        "calc": "=C242"
      },
      {
        "type": "numCalc",
        "id": "C180",
        "text": [
          "Total Maternal Prophylaxis and ART",
          ""
        ],
        "textClass": "numCalc yellow",
        "inputClass": "bigNum currency",
        "calc": "=SUM(C177:C179)"
      },
      {
        "type": "label",
        "text": [
          "A.2   Infant Prophylaxis",
          ""
        ],
        "textClass": "normalBold"
      },
      {
        "type": "numCalc",
        "id": "C183",
        "text": [
          "A.2.1 Infant Prophylaxis Maternal ART",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "bigNum currency",
        "calc": "=C247"
      },
      {
        "type": "numCalc",
        "id": "C184",
        "text": [
          "A.2.2  Infant Prophylaxis Option A",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "bigNum currency",
        "calc": "=C253"
      },
      {
        "type": "numCalc",
        "id": "C185",
        "text": [
          "A.2.3  Infant Prophylaxis Option B",
          ""
        ],
        "textClass": "numCalc",
        "inputClass": "bigNum currency",
        "calc": "=C258"
      },
      {
        "type": "numCalc",
        "id": "C186",
        "text": [
          "Total Infant Prophylaxis",
          ""
        ],
        "textClass": "numCalc yellow",
        "inputClass": "bigNum currency",
        "calc": "=SUM(C183:C185)"
      },
      {
        "type": "label",
        "text": [
          "B.  Commodity",
          ""
        ],
        "textClass": "largeBold"
      },
      {
        "type": "numCalc",
        "id": "C188",
        "text": [
          "Total Commodity Costs",
          ""
        ],
        "textClass": "numCalc yellow",
        "inputClass": "bigNum currency",
        "calc": "=E89"
      },
      {
        "type": "label",
        "text": [
          "C.  Equipment",
          ""
        ],
        "textClass": "largeBold"
      },
      {
        "type": "numCalc",
        "id": "C190",
        "text": [
          "Total Equipment Costs",
          ""
        ],
        "textClass": "numCalc yellow",
        "inputClass": "bigNum currency",
        "calc": "=E106"
      },
      {
        "type": "label",
        "text": [
          "D.  Supply",
          ""
        ],
        "textClass": "largeBold"
      },
      {
        "type": "numCalc",
        "id": "C192",
        "text": [
          "Total Supply Costs",
          ""
        ],
        "textClass": "numCalc yellow",
        "inputClass": "bigNum currency",
        "calc": "=E121"
      },
      {
        "type": "label",
        "text": [
          "E.  Other Direct",
          ""
        ],
        "textClass": "largeBold"
      },
      {
        "type": "numCalc",
        "id": "C194",
        "text": [
          "Total Other Direct Costs",
          ""
        ],
        "textClass": "numCalc yellow",
        "inputClass": "bigNum currency",
        "calc": "=E141"
      },
      {
        "type": "label",
        "text": [
          "F.  Personnel",
          ""
        ],
        "textClass": "largeBold"
      },
      {
        "type": "numCalc",
        "id": "C196",
        "text": [
          "Total Personnel Costs",
          ""
        ],
        "textClass": "numCalc yellow",
        "inputClass": "bigNum currency",
        "calc": "=E156"
      },
      {
        "type": "label",
        "text": [
          "G.  Training",
          ""
        ],
        "textClass": "largeBold"
      },
      {
        "type": "numCalc",
        "id": "C198",
        "text": [
          "Total Training Costs",
          ""
        ],
        "textClass": "numCalc yellow",
        "inputClass": "bigNum currency",
        "calc": "=E171"
      },
      {
        "type": "label",
        "text": "",
        "textClass": "largeBold"
      },
      {
        "type": "numCalc",
        "id": "C202",
        "text": [
          "Grand Total",
          ""
        ],
        "textClass": "numCalc largeBold",
        "inputClass": "bigNum currency orange",
        "calc": "=C198+C196+C194+C192+C190+C188+C186+C180"
      }
    ],
    "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance"
  }