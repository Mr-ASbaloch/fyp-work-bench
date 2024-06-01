const formFields = [
  {
    section: 'Personal Information',
    fields: [
      {name: 'fullName', label: 'Full Name', type: 'text', required: true},
      {
        name: 'fatherName',
        label: "Father's Name",
        type: 'text',
        required: true,
      },
      {name: 'birthdate', label: 'Date of Birth', type: 'text', required: true},
      {name: 'email', label: 'Email', type: 'email', required: true},
      {
        name: 'mobileNumber',
        label: 'Mobile Number',
        type: 'phone',
        required: true,
      },
      {name: 'otherMobileNumber', label: 'Other Mobile Number', type: 'phone'},
      {
        name: 'homeAddress',
        label: 'Home Address',
        type: 'text',
        required: true,
      },
      {name: 'streetAddress', label: 'Street Address', type: 'text'},
      {name: 'city', label: 'City', type: 'text', required: true},
      {name: 'province', label: 'Province', type: 'text', required: true},
      {name: 'postalCode', label: 'Postal Code', type: 'text', required: true},
      {
        name: 'tehsilAddress',
        label: 'Tehsil Address',
        type: 'text',
        required: true,
      },
    ],
  },
  {
    section: 'Professional Information',
    fields: [
      {name: 'status', label: 'Status', type: 'text', required: true},
      {name: 'professionalStatus', label: 'Professional Status', type: 'text'},
      {name: 'companyName', label: 'Company Name', type: 'text'},
      {name: 'telOff', label: 'Tel (Office)', type: 'phone'},
      {name: 'mobile', label: 'Mobile', type: 'phone'},
      {name: 'occupationType', label: 'Occupation Type', type: 'text'},
      {name: 'ntn', label: 'NTN', type: 'text'},
      {name: 'designation', label: 'Designation', type: 'text'},
      {name: 'grossIncome', label: 'Gross Income', type: 'text'},
      {name: 'netMonthlyIncome', label: 'Net Monthly Income', type: 'text'},
    ],
  },
  {
    section: 'Supporting Person Information',
    fields: [
      {
        name: 'supportingPersonName',
        label: 'Supporting Person Name',
        type: 'text',
      },
      {name: 'relationship', label: 'Relationship', type: 'text'},
      {
        name: 'supportingPersonOccupation',
        label: 'Supporting Person Occupation',
        type: 'text',
      },
      {
        name: 'monthlyFinancialSupport',
        label: 'Monthly Financial Support',
        type: 'text',
      },
    ],
  },
  {
    section: 'Accommodation Information',
    fields: [
      {name: 'assetIncome', label: 'Asset Income', type: 'text'},
      {name: 'accType', label: 'Accommodation Type', type: 'text'},
      {name: 'accStatus', label: 'Accommodation Status', type: 'text'},
      {name: 'rentPayment', label: 'Rent Payment', type: 'text'},
      {name: 'plotSize', label: 'Plot Size', type: 'text'},
      {name: 'coveredArea', label: 'Covered Area', type: 'text'},
    ],
    subFields: {
      accDetails: [
        {name: 'location', label: 'Location', type: 'text'},
        {name: 'bedrooms', label: 'No. of Bedrooms', type: 'text'},
        {
          name: 'airConditioners',
          label: 'No. of Air Conditioners',
          type: 'text',
        },
        {name: 'monthlyRent', label: 'Monthly Rent', type: 'text'},
      ],
    },
  },
  {
    section: 'Other Information',
    fields: [
      {name: 'sop', label: 'Statement of Purpose', type: 'textarea'},
      // { name: 'otherHouse', label: 'Do you have another house?', type: 'checkbox' },
    ],
  },
];


  export default formFields;
  