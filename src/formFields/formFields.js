const formFields = [
  {
    section: 'Personal Information',
    fields: [
      {name: 'fullName', label: 'Full Name', type: 'text', required: true},
      {name: 'birthdate', label: 'Date of Birth', type: 'text', required: true},
      {name: 'email', label: 'Email', type: 'email', required: true},
      {
        name: 'mobileNumber',
        label: 'Mobile Number',
        type: 'phone',
        required: true,
      },
      {
        name: 'homeAddress',
        label: 'Home Address',
        type: 'text',
        required: true,
      },
      {name: 'city', label: 'City', type: 'text', required: true},
      {name: 'province', label: 'Province', type: 'text', required: true},
    ],
  },
  {
    section: 'University Information',
    fields: [
      {name: 'department', label: 'Department', type: 'text', required: true},
      {name: 'degreeProgram', label: 'Degree Program', type: 'text', required: true},
      {name: 'semester', label: 'Semester', type: 'text', required: true},
      {
        name: 'currentCGPA',
        label: 'Current CGPA',
        type: 'text',
        required: true,
      },
    ],
  },
  {
    section: 'Contact Information',
    fields: [
      {name: 'otherMobileNumber', label: 'Other Mobile Number', type: 'phone'},
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
    section: 'Financial Information',
    fields: [
      {name: 'netFamilyIncome', label: 'Net Family Income', type: 'text'},
      {name: 'assetIncome', label: 'Asset Income (if any)', type: 'text'},
    ],
  },
  {
    section: 'Statement of Purpose',
    fields: [{name: 'sop', label: 'Statement of Purpose', type: 'textarea'}],
  },
];

export default formFields;
