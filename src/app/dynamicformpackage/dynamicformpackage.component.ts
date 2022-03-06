import { Component, OnInit } from '@angular/core';
import formsjson from '../../assets/jsons/US_Surgeon_General_family_health_portrait.json';

@Component({
  selector: 'app-dynamicformpackage',
  templateUrl: './dynamicformpackage.component.html',
  styleUrls: ['./dynamicformpackage.component.css'],
})
export class DynamicformpackageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.finalarrayfunct();
  }

  addAnotherGroup(table_index: any) {
    const group = {
      isDeletable: true,
      type: 'group',
      code: [
        {
          code: '54137-5',
          display: 'Diseases history panel',
        },
      ],
      required: false,
      repeats: true,
      linkId: '/54126-8/54137-5',
      text: 'Diseases history panel',
      item: [
        {
          type: 'choice',
          code: [
            {
              code: '54140-9',
              display: 'History of diseases',
            },
          ],
          extension: [
            {
              url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://hl7.org/fhir/questionnaire-item-control',
                    code: 'autocomplete',
                    display: 'Auto-complete',
                  },
                ],
                text: 'Auto-complete',
              },
            },
            {
              url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-externallydefined',
              valueUri:
                'https://clinicaltables.nlm.nih.gov/api/conditions/v3/search',
            },
          ],
          required: false,
          linkId: '/54126-8/54137-5/54140-9',
          text: 'History of diseases',
        },
        {
          type: 'choice',
          code: [
            {
              code: '54130-0',
              display: 'Age range at onset of disease',
            },
          ],
          extension: [
            {
              url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://hl7.org/fhir/questionnaire-item-control',
                    code: 'drop-down',
                    display: 'Drop down',
                  },
                ],
                text: 'Drop down',
              },
            },
          ],
          required: false,
          linkId: '/54126-8/54137-5/54130-0',
          text: 'Age range at onset of disease',
          answerOption: [
            {
              valueCoding: {
                code: 'LA10402-8',
                display: 'Pre-Birth',
              },
            },
            {
              valueCoding: {
                code: 'LA10403-6',
                display: 'Newborn',
              },
            },
            {
              valueCoding: {
                code: 'LA10394-7',
                display: 'Infancy',
              },
            },
            {
              valueCoding: {
                code: 'LA10395-4',
                display: 'Childhood',
              },
            },
            {
              valueCoding: {
                code: 'LA10404-4',
                display: 'Adolescence',
              },
            },
            {
              valueCoding: {
                code: 'LA10396-2',
                display: '20-29',
              },
            },
            {
              valueCoding: {
                code: 'LA10397-0',
                display: '30-39',
              },
            },
            {
              valueCoding: {
                code: 'LA10398-8',
                display: '40-49',
              },
            },
            {
              valueCoding: {
                code: 'LA10399-6',
                display: '50-59',
              },
            },
            {
              valueCoding: {
                code: 'LA10400-2',
                display: 'OVER 60',
              },
            },
            {
              valueCoding: {
                code: 'LA4489-6',
                display: 'Unknown',
              },
            },
          ],
        },
      ],
    };
    this.data.item[table_index].item.push(group);
  }

  removeGroup(table_index: any, row_index: any) {
    this.data.item[table_index].item.splice(row_index, 1);
  }

  finalArray: any = [];
  headings: any = [];
  types: any = [];
  title = 'abc';

  data: any = formsjson;

  data_test: any = {
    extension: [],
    code: [
      {
        code: '54127-6',
        display: 'US Surgeon General family health portrait',
      },
    ],
    title: 'US Surgeon General family health portrait',
    resourceType: 'Questionnaire',
    status: 'draft',
    meta: {
      profile: [
        'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire|2.7',
      ],
      tag: [
        {
          code: 'lformsVersion: undefined',
        },
      ],
    },
    item: [
      {
        type: 'group',
        code: [
          {
            code: '54126-8',
            display: 'My health history',
          },
        ],
        required: false,
        linkId: '/54126-8',
        text: 'My health history',
        item: [
          {
            type: 'string',
            code: [
              {
                code: '54125-0',
                display: 'Name',
              },
            ],
            required: false,
            linkId: '/54126-8/54125-0',
            text: 'Name',
          },
          {
            type: 'choice',
            code: [
              {
                code: '54131-8',
                display: 'Gender',
              },
            ],
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'http://hl7.org/fhir/questionnaire-item-control',
                      code: 'drop-down',
                      display: 'Drop down',
                    },
                  ],
                  text: 'Drop down',
                },
              },
            ],
            required: false,
            linkId: '/54126-8/54131-8',
            text: 'Gender',
            answerOption: [
              {
                valueCoding: {
                  code: 'LA2-8',
                  display: 'Male',
                },
              },
              {
                valueCoding: {
                  code: 'LA3-6',
                  display: 'Female',
                },
              },
              {
                valueCoding: {
                  code: 'LA46-8',
                  display: 'Other',
                },
              },
            ],
          },
          {
            type: 'date',
            code: [
              {
                code: '21112-8',
                display: 'Birth Date',
              },
            ],
            required: false,
            linkId: '/54126-8/21112-8',
            text: 'Birth Date',
          },
          {
            type: 'choice',
            code: [
              {
                code: '54132-6',
                display: 'Twin',
              },
            ],
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'http://hl7.org/fhir/questionnaire-item-control',
                      code: 'drop-down',
                      display: 'Drop down',
                    },
                  ],
                  text: 'Drop down',
                },
              },
            ],
            required: false,
            linkId: '/54126-8/54132-6',
            text: 'Twin',
            answerOption: [
              {
                valueCoding: {
                  code: 'LA10427-5',
                  display: 'Yes - Identical (Same)',
                },
              },
              {
                valueCoding: {
                  code: 'LA10428-3',
                  display: 'Yes - Fraternal (Different)',
                },
              },
              {
                valueCoding: {
                  code: 'LA32-8',
                  display: 'No',
                },
              },
            ],
          },
          {
            type: 'choice',
            code: [
              {
                code: '54128-4',
                display: 'Adopted',
              },
            ],
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'http://hl7.org/fhir/questionnaire-item-control',
                      code: 'drop-down',
                      display: 'Drop down',
                    },
                  ],
                  text: 'Drop down',
                },
              },
            ],
            required: false,
            linkId: '/54126-8/54128-4',
            text: 'Adopted',
            answerOption: [
              {
                valueCoding: {
                  code: 'LA33-6',
                  display: 'Yes',
                },
              },
              {
                valueCoding: {
                  code: 'LA32-8',
                  display: 'No',
                },
              },
            ],
          },
          {
            type: 'choice',
            code: [
              {
                code: '54135-9',
                display: 'Parents related',
              },
            ],
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'http://hl7.org/fhir/questionnaire-item-control',
                      code: 'drop-down',
                      display: 'Drop down',
                    },
                  ],
                  text: 'Drop down',
                },
              },
            ],
            required: false,
            linkId: '/54126-8/54135-9',
            text: 'Parents related',
            answerOption: [
              {
                valueCoding: {
                  code: 'LA33-6',
                  display: 'Yes',
                },
              },
              {
                valueCoding: {
                  code: 'LA32-8',
                  display: 'No',
                },
              },
            ],
          },
          {
            type: 'decimal',
            code: [
              {
                code: '8302-2',
                display: 'Body height',
              },
            ],
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
                valueCoding: {
                  display: '[in_i]',
                },
              },
            ],
            required: false,
            linkId: '/54126-8/8302-2',
            text: 'Body height',
          },
          {
            type: 'decimal',
            code: [
              {
                code: '29463-7',
                display: 'Weight',
              },
            ],
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
                valueCoding: {
                  display: 'kg',
                },
              },
            ],
            required: false,
            linkId: '/54126-8/29463-7',
            text: 'Weight',
          },
          {
            type: 'choice',
            code: [
              {
                code: '54134-2',
                display: 'Race',
              },
            ],
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'http://hl7.org/fhir/questionnaire-item-control',
                      code: 'drop-down',
                      display: 'Drop down',
                    },
                  ],
                  text: 'Drop down',
                },
              },
            ],
            required: false,
            repeats: true,
            linkId: '/54126-8/54134-2',
            text: 'Race',
            answerOption: [
              {
                valueCoding: {
                  code: 'LA10608-0',
                  display: 'American Indian or Alaska Native',
                },
              },
              {
                valueCoding: {
                  code: 'LA6156-9',
                  display: 'Asian',
                },
              },
              {
                valueCoding: {
                  code: 'LA10614-8',
                  display: '-- Asian Indian',
                },
              },
              {
                valueCoding: {
                  code: 'LA10615-5',
                  display: '-- Chinese',
                },
              },
              {
                valueCoding: {
                  code: 'LA10616-3',
                  display: '-- Filipino',
                },
              },
              {
                valueCoding: {
                  code: 'LA10617-1',
                  display: '-- Japanese',
                },
              },
              {
                valueCoding: {
                  code: 'LA10618-9',
                  display: '-- Korean',
                },
              },
              {
                valueCoding: {
                  code: 'LA10620-5',
                  display: '-- Vietnamese',
                },
              },
              {
                valueCoding: {
                  code: 'LA10619-7',
                  display: '-- Other Asian',
                },
              },
              {
                valueCoding: {
                  code: 'LA10610-6',
                  display: 'Black or African American',
                },
              },
              {
                valueCoding: {
                  code: 'LA10611-4',
                  display: 'Native Hawaiian or Other Pacific Islander',
                },
              },
              {
                valueCoding: {
                  code: 'LA10623-9',
                  display: '-- Native Hawaiian',
                },
              },
              {
                valueCoding: {
                  code: 'LA10622-1',
                  display: '-- Guamanian',
                },
              },
              {
                valueCoding: {
                  code: 'LA10621-3',
                  display: '-- Chamorro',
                },
              },
              {
                valueCoding: {
                  code: 'LA10625-4',
                  display: '-- Samoan',
                },
              },
              {
                valueCoding: {
                  code: 'LA10624-7',
                  display: '-- Other Pacific Islander',
                },
              },
              {
                valueCoding: {
                  code: 'LA4457-3',
                  display: 'White',
                },
              },
              {
                valueCoding: {
                  code: 'LA10613-0',
                  display: 'Other/Unknown/Refuse To Answer',
                },
              },
            ],
          },
          {
            type: 'choice',
            code: [
              {
                code: '54133-4',
                display: 'Ethnicity',
              },
            ],
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'http://hl7.org/fhir/questionnaire-item-control',
                      code: 'drop-down',
                      display: 'Drop down',
                    },
                  ],
                  text: 'Drop down',
                },
              },
            ],
            required: false,
            repeats: true,
            linkId: '/54126-8/54133-4',
            text: 'Ethnicity',
            answerOption: [
              {
                valueCoding: {
                  code: 'LA6214-6',
                  display: 'Hispanic or Latino',
                },
              },
              {
                valueCoding: {
                  code: 'LA10599-1',
                  display: '-- Central American',
                },
              },
              {
                valueCoding: {
                  code: 'LA10600-7',
                  display: '-- Cuban',
                },
              },
              {
                valueCoding: {
                  code: 'LA10601-5',
                  display: '-- Dominican(Republic)',
                },
              },
              {
                valueCoding: {
                  code: 'LA10602-3',
                  display: '-- Mexican',
                },
              },
              {
                valueCoding: {
                  code: 'LA10605-6',
                  display: '-- Puerto Rican',
                },
              },
              {
                valueCoding: {
                  code: 'LA10606-4',
                  display: '-- South American',
                },
              },
              {
                valueCoding: {
                  code: 'LA10604-9',
                  display: '-- Other Latin American',
                },
              },
              {
                valueCoding: {
                  code: 'LA10603-1',
                  display: '-- Other Hispanic/Latino/Spanish',
                },
              },
              {
                valueCoding: {
                  code: 'LA10597-5',
                  display: 'Non-Hispanic or Latino',
                },
              },
              {
                valueCoding: {
                  code: 'LA10598-3',
                  display: 'Ashkenazi Jewish',
                },
              },
              {
                valueCoding: {
                  code: 'LA10607-2',
                  display: 'Unknown/No answer',
                },
              },
            ],
          },
          {
            type: 'group',
            code: [
              {
                code: '54137-5',
                display: 'Diseases history panel',
              },
            ],
            required: false,
            repeats: true,
            linkId: '/54126-8/54137-5',
            text: 'Diseases history panel',
            item: [
              {
                type: 'choice',
                code: [
                  {
                    code: '54140-9',
                    display: 'History of diseases',
                  },
                ],
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                            'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'autocomplete',
                          display: 'Auto-complete',
                        },
                      ],
                      text: 'Auto-complete',
                    },
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-externallydefined',
                    valueUri:
                      'https://clinicaltables.nlm.nih.gov/api/conditions/v3/search',
                  },
                ],
                required: false,
                linkId: '/54126-8/54137-5/54140-9',
                text: 'History of diseases',
              },
              {
                type: 'choice',
                code: [
                  {
                    code: '54130-0',
                    display: 'Age range at onset of disease',
                  },
                ],
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                            'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'drop-down',
                          display: 'Drop down',
                        },
                      ],
                      text: 'Drop down',
                    },
                  },
                ],
                required: false,
                linkId: '/54126-8/54137-5/54130-0',
                text: 'Age range at onset of disease',
                answerOption: [
                  {
                    valueCoding: {
                      code: 'LA10402-8',
                      display: 'Pre-Birth',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10403-6',
                      display: 'Newborn',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10394-7',
                      display: 'Infancy',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10395-4',
                      display: 'Childhood',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10404-4',
                      display: 'Adolescence',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10396-2',
                      display: '20-29',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10397-0',
                      display: '30-39',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10398-8',
                      display: '40-49',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10399-6',
                      display: '50-59',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10400-2',
                      display: 'OVER 60',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA4489-6',
                      display: 'Unknown',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'group',
        code: [
          {
            code: '54114-4',
            display: 'Family member health history',
          },
        ],
        required: false,
        repeats: true,
        linkId: '/54114-4',
        text: 'Family member health history',
        item: [
          {
            type: 'choice',
            code: [
              {
                code: '54136-7',
                display: 'Relationship to patient',
              },
            ],
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'http://hl7.org/fhir/questionnaire-item-control',
                      code: 'drop-down',
                      display: 'Drop down',
                    },
                  ],
                  text: 'Drop down',
                },
              },
            ],
            required: false,
            linkId: '/54114-4/54136-7',
            text: 'Relationship to patient',
            answerOption: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix',
                    valueString: 'DAU',
                  },
                ],
                valueCoding: {
                  code: 'LA10405-1',
                  display: 'Daughter',
                },
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix',
                    valueString: 'GRNDDAU',
                  },
                ],
                valueCoding: {
                  code: 'LA10406-9',
                  display: 'Granddaughter',
                },
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix',
                    valueString: 'GRNDSON',
                  },
                ],
                valueCoding: {
                  code: 'LA10407-7',
                  display: 'Grandson',
                },
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix',
                    valueString: 'HBRO',
                  },
                ],
                valueCoding: {
                  code: 'LA10408-5',
                  display: 'Half-brother',
                },
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix',
                    valueString: 'HSIS',
                  },
                ],
                valueCoding: {
                  code: 'LA10409-3',
                  display: 'Half-sister',
                },
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix',
                    valueString: 'MAUNT',
                  },
                ],
                valueCoding: {
                  code: 'LA10410-1',
                  display: 'Maternal Aunt',
                },
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix',
                    valueString: 'MCOUSN',
                  },
                ],
                valueCoding: {
                  code: 'LA10411-9',
                  display: 'Maternal Cousin',
                },
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix',
                    valueString: 'MGRFTH',
                  },
                ],
                valueCoding: {
                  code: 'LA10412-7',
                  display: 'Maternal Grandfather',
                },
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix',
                    valueString: 'MGRMTH',
                  },
                ],
                valueCoding: {
                  code: 'LA10413-5',
                  display: 'Maternal Grandmother',
                },
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix',
                    valueString: 'MUNCLE',
                  },
                ],
                valueCoding: {
                  code: 'LA10414-3',
                  display: 'Maternal Uncle',
                },
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix',
                    valueString: 'NBRO',
                  },
                ],
                valueCoding: {
                  code: 'LA10415-0',
                  display: 'Brother',
                },
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix',
                    valueString: 'NFTH',
                  },
                ],
                valueCoding: {
                  code: 'LA10416-8',
                  display: 'Father',
                },
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix',
                    valueString: 'NMTH',
                  },
                ],
                valueCoding: {
                  code: 'LA10417-6',
                  display: 'Mother',
                },
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix',
                    valueString: 'NSIS',
                  },
                ],
                valueCoding: {
                  code: 'LA10418-4',
                  display: 'Sister',
                },
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix',
                    valueString: 'NEPHEW',
                  },
                ],
                valueCoding: {
                  code: 'LA10419-2',
                  display: 'Nephew',
                },
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix',
                    valueString: 'NIECE',
                  },
                ],
                valueCoding: {
                  code: 'LA10420-0',
                  display: 'Niece',
                },
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix',
                    valueString: 'PAUNT',
                  },
                ],
                valueCoding: {
                  code: 'LA10421-8',
                  display: 'Paternal Aunt',
                },
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix',
                    valueString: 'PCOUSN',
                  },
                ],
                valueCoding: {
                  code: 'LA10422-6',
                  display: 'Paternal Cousin',
                },
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix',
                    valueString: 'PGRFTH',
                  },
                ],
                valueCoding: {
                  code: 'LA10423-4',
                  display: 'Paternal Grandfather',
                },
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix',
                    valueString: 'PGRMTH',
                  },
                ],
                valueCoding: {
                  code: 'LA10424-2',
                  display: 'Paternal Grandmother',
                },
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix',
                    valueString: 'PUNCLE',
                  },
                ],
                valueCoding: {
                  code: 'LA10425-9',
                  display: 'Paternal Uncle',
                },
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix',
                    valueString: 'SON',
                  },
                ],
                valueCoding: {
                  code: 'LA10426-7',
                  display: 'Son',
                },
              },
            ],
            item: [
              {
                text: 'The relationship of a family member to the patient.',
                type: 'display',
                linkId: '/54114-4/54136-7-help',
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      text: 'Help-Button',
                      coding: [
                        {
                          code: 'help',
                          display: 'Help-Button',
                          system:
                            'http://hl7.org/fhir/questionnaire-item-control',
                        },
                      ],
                    },
                  },
                ],
              },
            ],
          },
          {
            type: 'string',
            code: [
              {
                code: '54138-3',
                display: 'Name',
              },
            ],
            required: false,
            linkId: '/54114-4/54138-3',
            text: 'Name',
          },
          {
            type: 'choice',
            code: [
              {
                code: '54123-5',
                display: 'Gender',
              },
            ],
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'http://hl7.org/fhir/questionnaire-item-control',
                      code: 'drop-down',
                      display: 'Drop down',
                    },
                  ],
                  text: 'Drop down',
                },
              },
            ],
            required: false,
            linkId: '/54114-4/54123-5',
            text: 'Gender',
            answerOption: [
              {
                valueCoding: {
                  code: 'LA2-8',
                  display: 'Male',
                },
              },
              {
                valueCoding: {
                  code: 'LA3-6',
                  display: 'Female',
                },
              },
              {
                valueCoding: {
                  code: 'LA46-8',
                  display: 'Other',
                },
              },
            ],
          },
          {
            type: 'choice',
            code: [
              {
                code: '54139-1',
                display: 'Living?',
              },
            ],
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'http://hl7.org/fhir/questionnaire-item-control',
                      code: 'drop-down',
                      display: 'Drop down',
                    },
                  ],
                  text: 'Drop down',
                },
              },
            ],
            required: false,
            linkId: '/54114-4/54139-1',
            text: 'Living?',
            answerOption: [
              {
                valueCoding: {
                  code: 'LA33-6',
                  display: 'Yes',
                },
              },
              {
                valueCoding: {
                  code: 'LA32-8',
                  display: 'No',
                },
              },
              {
                valueCoding: {
                  code: 'LA4489-6',
                  display: 'Unknown',
                },
              },
            ],
            item: [
              {
                type: 'date',
                code: [
                  {
                    code: '54124-3',
                    display: 'Date of Birth',
                  },
                ],
                required: false,
                linkId: '/54114-4/54139-1/54124-3',
                text: 'Date of Birth',
                enableWhen: [
                  {
                    answerCoding: {
                      code: 'LA33-6',
                    },
                    question: '/54114-4/54139-1',
                    operator: '=',
                  },
                ],
              },
              {
                type: 'decimal',
                code: [
                  {
                    code: '54141-7',
                    display: 'Current Age',
                  },
                ],
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
                    valueCoding: {
                      display: 'a',
                    },
                  },
                ],
                required: false,
                linkId: '/54114-4/54139-1/54141-7',
                text: 'Current Age',
                enableWhen: [
                  {
                    answerCoding: {
                      code: 'LA33-6',
                    },
                    question: '/54114-4/54139-1',
                    operator: '=',
                  },
                ],
              },
              {
                type: 'choice',
                code: [
                  {
                    code: '54112-8',
                    display: 'Cause of Death',
                  },
                ],
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                            'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'drop-down',
                          display: 'Drop down',
                        },
                      ],
                      text: 'Drop down',
                    },
                  },
                ],
                required: false,
                linkId: '/54114-4/54139-1/54112-8',
                text: 'Cause of Death',
                enableWhen: [
                  {
                    answerCoding: {
                      code: 'LA32-8',
                    },
                    question: '/54114-4/54139-1',
                    operator: '=',
                  },
                ],
                answerOption: [
                  {
                    valueCoding: {
                      code: 'LA10533-0',
                      display: 'Blood Clots',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10572-8',
                      display: '-- Blood Clot in Leg',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10573-6',
                      display: '-- Blood Clot in Lungs',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10524-9',
                      display: 'Cancer',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10549-6',
                      display: '-- Bone Cancer',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10536-3',
                      display: '-- Breast Cancer',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10537-1',
                      display: '-- Colon Cancer',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10548-8',
                      display: '-- Esophageal Cancer',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10547-0',
                      display: '-- Gastric Cancer',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10541-3',
                      display: '-- Kidney Cancer',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10545-4',
                      display: '-- Leukemia',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10542-1',
                      display: '-- Lung Cancer',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10546-2',
                      display: '-- Muscle Cancer',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10539-7',
                      display: '-- Ovarian Cancer',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10538-9',
                      display: '-- Prostate Cancer',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10543-9',
                      display: '-- Skin Cancer',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10540-5',
                      display: '-- Thyroid Cancer',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10544-7',
                      display: '-- Uterine Cancer',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10550-4',
                      display: '-- Other Cancer',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10529-8',
                      display: 'Diabetes',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10551-2',
                      display: '-- Diabetes Type 1',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10552-0',
                      display: '-- Diabetes Type 2',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10553-8',
                      display: '-- Gestational Diabetes',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10532-2',
                      display: 'Gastrointestinal Disease',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10554-6',
                      display: "-- Crohn's Disease",
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10555-3',
                      display: '-- Irritable Bowel Syndrome',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10556-1',
                      display: '-- Ulceritive Colitis',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10557-9',
                      display: '-- Colon Polyps',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10523-1',
                      display: 'Heart Disease',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10558-7',
                      display: '-- Heart Attack',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10526-4',
                      display: 'High Cholesterol/Hyperlipidemia',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA7444-8',
                      display: 'Hypertension',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10528-0',
                      display: 'Kidney Disease',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10565-2',
                      display: '-- Cystic Kidney Disease',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10566-0',
                      display: '-- Kidney Disease Present From Birth',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10567-8',
                      display: '-- Nephrosis',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10568-6',
                      display: '-- Nephritis',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10569-4',
                      display: '-- Nephrotic Syndrome',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10570-2',
                      display: '-- Diabetic Kidney Disease',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10571-0',
                      display: '-- Other/Unknown',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10531-4',
                      display: 'Lung Disease',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10559-5',
                      display: '-- COPD',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10560-3',
                      display: '-- Chronic Bronchitis',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10561-1',
                      display: '-- Emphysema',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10562-9',
                      display: '-- Chronic Lower Respiratory Disease',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10563-7',
                      display: '-- Influenza/Pneumonia',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10564-5',
                      display: '-- Asthma',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10590-0',
                      display: 'Neurological Disorders',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10527-2',
                      display: 'Osteoporosis',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10535-5',
                      display: 'Psychological Disorders',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10574-4',
                      display: '-- Anxiety',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10575-1',
                      display: '-- Bipolar/Manic Depressive Disorder',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10576-9',
                      display: '-- Depression',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10577-7',
                      display: '-- Attention Deficit Hyper Activity',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10578-5',
                      display: '-- Autism',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10579-3',
                      display: '-- Personality Disorder',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10580-1',
                      display: '-- Eating Disorder',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10581-9',
                      display: '-- Obsessive Compulsive Disorder',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10582-7',
                      display: '-- Panic Disorder',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10583-5',
                      display: '-- Post Traumatic Stress Disorder',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10584-3',
                      display: '-- Schizophrenia',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10585-0',
                      display: '-- Social Phobia',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10586-8',
                      display: '-- Dementia',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10591-8',
                      display: 'Septicemia',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10522-3',
                      display: 'Stroke/Brain Attack',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10530-6',
                      display: 'Sudden Infant Death Syndrome',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10595-9',
                      display: 'Cause of Death',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10587-6',
                      display: '-- Suicide',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10588-4',
                      display: '-- Accidental Death',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10589-2',
                      display: '-- Other/Unexpected',
                    },
                  },
                ],
              },
              {
                type: 'choice',
                code: [
                  {
                    code: '54113-6',
                    display: 'Age at Death',
                  },
                ],
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                            'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'drop-down',
                          display: 'Drop down',
                        },
                      ],
                      text: 'Drop down',
                    },
                  },
                ],
                required: false,
                linkId: '/54114-4/54139-1/54113-6',
                text: 'Age at Death',
                enableWhen: [
                  {
                    answerCoding: {
                      code: 'LA32-8',
                    },
                    question: '/54114-4/54139-1',
                    operator: '=',
                  },
                ],
                answerOption: [
                  {
                    valueCoding: {
                      code: 'LA10402-8',
                      display: 'Pre-Birth',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10403-6',
                      display: 'Newborn',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10394-7',
                      display: 'Infancy',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10395-4',
                      display: 'Childhood',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10404-4',
                      display: 'Adolescence',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10396-2',
                      display: '20-29',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10397-0',
                      display: '30-39',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10398-8',
                      display: '40-49',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10399-6',
                      display: '50-59',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10400-2',
                      display: 'OVER 60',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA4489-6',
                      display: 'Unknown',
                    },
                  },
                ],
              },
            ],
          },
          {
            type: 'choice',
            code: [
              {
                code: '54121-9',
                display: 'Twin',
              },
            ],
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'http://hl7.org/fhir/questionnaire-item-control',
                      code: 'drop-down',
                      display: 'Drop down',
                    },
                  ],
                  text: 'Drop down',
                },
              },
            ],
            required: false,
            linkId: '/54114-4/54121-9',
            text: 'Twin',
            answerOption: [
              {
                valueCoding: {
                  code: 'LA10427-5',
                  display: 'Yes - Identical (Same)',
                },
              },
              {
                valueCoding: {
                  code: 'LA10428-3',
                  display: 'Yes - Fraternal (Different)',
                },
              },
              {
                valueCoding: {
                  code: 'LA32-8',
                  display: 'No',
                },
              },
            ],
          },
          {
            type: 'choice',
            code: [
              {
                code: '54122-7',
                display: 'Adopted',
              },
            ],
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'http://hl7.org/fhir/questionnaire-item-control',
                      code: 'drop-down',
                      display: 'Drop down',
                    },
                  ],
                  text: 'Drop down',
                },
              },
            ],
            required: false,
            linkId: '/54114-4/54122-7',
            text: 'Adopted',
            answerOption: [
              {
                valueCoding: {
                  code: 'LA33-6',
                  display: 'Yes',
                },
              },
              {
                valueCoding: {
                  code: 'LA32-8',
                  display: 'No',
                },
              },
            ],
          },
          {
            type: 'choice',
            code: [
              {
                code: '54119-3',
                display: 'Race',
              },
            ],
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'http://hl7.org/fhir/questionnaire-item-control',
                      code: 'drop-down',
                      display: 'Drop down',
                    },
                  ],
                  text: 'Drop down',
                },
              },
            ],
            required: false,
            repeats: true,
            linkId: '/54114-4/54119-3',
            text: 'Race',
            answerOption: [
              {
                valueCoding: {
                  code: 'LA10608-0',
                  display: 'American Indian or Alaska Native',
                },
              },
              {
                valueCoding: {
                  code: 'LA6156-9',
                  display: 'Asian',
                },
              },
              {
                valueCoding: {
                  code: 'LA10614-8',
                  display: '-- Asian Indian',
                },
              },
              {
                valueCoding: {
                  code: 'LA10615-5',
                  display: '-- Chinese',
                },
              },
              {
                valueCoding: {
                  code: 'LA10616-3',
                  display: '-- Filipino',
                },
              },
              {
                valueCoding: {
                  code: 'LA10617-1',
                  display: '-- Japanese',
                },
              },
              {
                valueCoding: {
                  code: 'LA10618-9',
                  display: '-- Korean',
                },
              },
              {
                valueCoding: {
                  code: 'LA10620-5',
                  display: '-- Vietnamese',
                },
              },
              {
                valueCoding: {
                  code: 'LA10619-7',
                  display: '-- Other Asian',
                },
              },
              {
                valueCoding: {
                  code: 'LA10610-6',
                  display: 'Black or African American',
                },
              },
              {
                valueCoding: {
                  code: 'LA10611-4',
                  display: 'Native Hawaiian or Other Pacific Islander',
                },
              },
              {
                valueCoding: {
                  code: 'LA10623-9',
                  display: '-- Native Hawaiian',
                },
              },
              {
                valueCoding: {
                  code: 'LA10622-1',
                  display: '-- Guamanian',
                },
              },
              {
                valueCoding: {
                  code: 'LA10621-3',
                  display: '-- Chamorro',
                },
              },
              {
                valueCoding: {
                  code: 'LA10625-4',
                  display: '-- Samoan',
                },
              },
              {
                valueCoding: {
                  code: 'LA10624-7',
                  display: '-- Other Pacific Islander',
                },
              },
              {
                valueCoding: {
                  code: 'LA4457-3',
                  display: 'White',
                },
              },
              {
                valueCoding: {
                  code: 'LA10613-0',
                  display: 'Other/Unknown/Refuse To Answer',
                },
              },
            ],
          },
          {
            type: 'choice',
            code: [
              {
                code: '54120-1',
                display: 'Ethnicity',
              },
            ],
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'http://hl7.org/fhir/questionnaire-item-control',
                      code: 'drop-down',
                      display: 'Drop down',
                    },
                  ],
                  text: 'Drop down',
                },
              },
            ],
            required: false,
            repeats: true,
            linkId: '/54114-4/54120-1',
            text: 'Ethnicity',
            answerOption: [
              {
                valueCoding: {
                  code: 'LA6214-6',
                  display: 'Hispanic or Latino',
                },
              },
              {
                valueCoding: {
                  code: 'LA10599-1',
                  display: '-- Central American',
                },
              },
              {
                valueCoding: {
                  code: 'LA10600-7',
                  display: '-- Cuban',
                },
              },
              {
                valueCoding: {
                  code: 'LA10601-5',
                  display: '-- Dominican(Republic)',
                },
              },
              {
                valueCoding: {
                  code: 'LA10602-3',
                  display: '-- Mexican',
                },
              },
              {
                valueCoding: {
                  code: 'LA10605-6',
                  display: '-- Puerto Rican',
                },
              },
              {
                valueCoding: {
                  code: 'LA10606-4',
                  display: '-- South American',
                },
              },
              {
                valueCoding: {
                  code: 'LA10604-9',
                  display: '-- Other Latin American',
                },
              },
              {
                valueCoding: {
                  code: 'LA10603-1',
                  display: '-- Other Hispanic/Latino/Spanish',
                },
              },
              {
                valueCoding: {
                  code: 'LA10597-5',
                  display: 'Non-Hispanic or Latino',
                },
              },
              {
                valueCoding: {
                  code: 'LA10598-3',
                  display: 'Ashkenazi Jewish',
                },
              },
              {
                valueCoding: {
                  code: 'LA10607-2',
                  display: 'Unknown/No answer',
                },
              },
            ],
          },
          {
            type: 'choice',
            code: [
              {
                code: '54118-5',
                display: 'Parents related',
              },
            ],
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'http://hl7.org/fhir/questionnaire-item-control',
                      code: 'drop-down',
                      display: 'Drop down',
                    },
                  ],
                  text: 'Drop down',
                },
              },
            ],
            required: false,
            linkId: '/54114-4/54118-5',
            text: 'Parents related',
            answerOption: [
              {
                valueCoding: {
                  code: 'LA33-6',
                  display: 'Yes',
                },
              },
              {
                valueCoding: {
                  code: 'LA32-8',
                  display: 'No',
                },
              },
            ],
          },
          {
            type: 'group',
            code: [
              {
                code: '54117-7',
                display: 'Diseases history panel',
              },
            ],
            required: false,
            repeats: true,
            linkId: '/54114-4/54117-7',
            text: 'Diseases history panel',
            item: [
              {
                type: 'choice',
                code: [
                  {
                    code: '54116-9',
                    display: 'History of diseases',
                  },
                ],
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                            'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'autocomplete',
                          display: 'Auto-complete',
                        },
                      ],
                      text: 'Auto-complete',
                    },
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-externallydefined',
                    valueUri:
                      'https://clinicaltables.nlm.nih.gov/api/conditions/v3/search',
                  },
                ],
                required: false,
                linkId: '/54114-4/54117-7/54116-9',
                text: 'History of diseases',
              },
              {
                type: 'choice',
                code: [
                  {
                    code: '54115-1',
                    display: 'Age range at onset of disease',
                  },
                ],
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                            'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'drop-down',
                          display: 'Drop down',
                        },
                      ],
                      text: 'Drop down',
                    },
                  },
                ],
                required: false,
                linkId: '/54114-4/54117-7/54115-1',
                text: 'Age range at onset of disease',
                answerOption: [
                  {
                    valueCoding: {
                      code: 'LA10402-8',
                      display: 'Pre-Birth',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10403-6',
                      display: 'Newborn',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10394-7',
                      display: 'Infancy',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10395-4',
                      display: 'Childhood',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10404-4',
                      display: 'Adolescence',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10396-2',
                      display: '20-29',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10397-0',
                      display: '30-39',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10398-8',
                      display: '40-49',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10399-6',
                      display: '50-59',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA10400-2',
                      display: 'OVER 60',
                    },
                  },
                  {
                    valueCoding: {
                      code: 'LA4489-6',
                      display: 'Unknown',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  finalarrayfunct() {
    for (let i = 0; i < this.data.item[0].item.length; i++) {
      this.finalArray.push(this.data.item[0].item[i]);
    }
    // for(let i = 0; i < this.data.item[0].item.length; i++){
    //   this.headings.push(this.data.item[0].item[i].text)
    //   this.types.push(this.data.item[0].item[i].type)
    //   // console.log(this.data.item[0].item[i].text)
    // }
  }
}
