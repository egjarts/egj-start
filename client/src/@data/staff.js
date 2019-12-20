const Staff = [
  {
    name: {
      givenName: 'Mohsin',
      familyName: 'Abbasi',
      fullName: 'Mohsin Abbasi',
      displayName: 'mohsin'
    },
    email: 'maa642@stern.nyu.edu',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2015-01-05/3333870689_3d798bf5fcb25084db14_original.jpg',
    services: {
      slack: {
        id: 'U037RQYL8',
        email: 'maa642@stern.nyu.edu',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U037RQYL8',
        email: 'maa642@stern.nyu.edu'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Husain',
      familyName: 'Abdulhay',
      fullName: 'Husain Abdulhay',
      displayName: 'Husain Abdulhay'
    },
    email: 'h.abdolhay@gmail.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'h.abdolhay@gmail.com',
          id: 'd5bd2087-e200-43d1-b52c-a8a332948b50',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-12-01T05:15:08+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Test',
      familyName: 'Account',
      fullName: 'Test Account',
      displayName: 'brian2'
    },
    email: 'brian@jimbabwe.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/624270e62e18965a1f90b20366b9a16d.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0005-48.png',
    services: {
      slack: {
        id: 'U037DEDQP',
        email: 'brian@jimbabwe.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U037DEDQP',
        email: 'brian@jimbabwe.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: null,
      familyName: 'Account',
      fullName: 'Service Account',
      displayName: 'Service Account'
    },
    email: 'submittable_sa@egjpress.org',
    status: 'Hidden',
    photoUrl: null,
    services: {
      submittable: {
        id: 'ccc9bc8a-be5a-4d23-8ded-69fba0ecb0fb',
        email: 'submittable_sa@egjpress.org',
        enabled: true
      }
    },
    dataSources: {
      submittable: {
        staff: {
          email: 'submittable_sa@egjpress.org',
          id: 'ccc9bc8a-be5a-4d23-8ded-69fba0ecb0fb'
        }
      }
    },
    isDeleted: false,
    orgRoles: {
      press: [
        {
          name: 'Guest Reader',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Tarn',
      familyName: 'Adams',
      fullName: 'Tarn Adams',
      displayName: 'tarn.adams'
    },
    email: 'tarn.adams@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/1d6d41c028aa4dd33b1f553754999b24.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0018-48.png',
    services: {
      slack: {
        id: 'U5PJ2VDKL',
        email: 'tarn.adams@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U5PJ2VDKL',
        email: 'tarn.adams@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Zach',
      familyName: 'Adams',
      fullName: 'Zach Adams',
      displayName: 'threetoe'
    },
    email: 'adams.zach@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/fb952d65627c8439602be0b4e1176181.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0023-48.png',
    services: {
      slack: {
        id: 'U5P16EPAM',
        email: 'adams.zach@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U5P16EPAM',
        email: 'adams.zach@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Taylor',
      familyName: 'Adams',
      fullName: 'Taylor Adams',
      displayName: 'Taylor Adams'
    },
    email: 'taylora@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '106604597635989900634',
        emails: [
          {
            address: 't.adams@yale.edu',
            type: 'other'
          },
          {
            address: 'taylora@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UJ22LSU90',
        email: 'taylora@egjpress.org'
      },
      submittable: {
        personal: {
          email: 't.adams@yale.edu',
          id: 'ceacb56c-8628-4694-9bdb-6c25365910a5',
          application: 12495978
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UJ22LSU90',
        email: 'taylora@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2019-05-03T11:37:12Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'taylora',
    appliedDate: '2019-02-28T23:15:03+00:00'
  },
  {
    name: {
      givenName: 'TeamTools',
      familyName: 'Admin',
      fullName: 'TeamTools Admin',
      displayName: 'TeamTools Admin'
    },
    email: 'teamtools-admin@egjarts.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '108914535567204787858',
        emails: [
          {
            address: 'teamtools-admin@egjarts.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      }
    },
    services: {
      gmail: {
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2019-10-19T19:35:35Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    }
  },
  {
    name: {
      givenName: 'Qirrat',
      familyName: 'Ahmad',
      fullName: 'Qirrat Ahmad',
      displayName: 'Qirrat Ahmad'
    },
    email: 'qirratahmad@seoulchristian.org',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'qirratahmad@seoulchristian.org',
          id: 'fe684e70-0707-4133-b9b3-50a09eb49f32',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-05-20T08:23:28+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Aazan',
      familyName: 'Ahmad',
      fullName: 'Aazan Ahmad',
      displayName: 'Aazan Ahmad'
    },
    email: 'spidermanland@yahoo.com.au',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'spidermanland@yahoo.com.au',
          id: '74adc67f-3511-46ed-91cf-1d0acb42e3d2',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-06-29T12:12:11+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Aazan',
      familyName: 'Ahmad',
      fullName: 'Aazan Ahmad',
      displayName: 'Aazan Ahmad'
    },
    email: 'spidermanland@yahoo.com.au',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'spidermanland@yahoo.com.au',
          id: '74adc67f-3511-46ed-91cf-1d0acb42e3d2',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-06-29T12:04:03+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Helena',
      familyName: 'Alistair',
      fullName: 'Helena Alistair',
      displayName: 'hjr.alistair'
    },
    email: 'hjr.alistair@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/adde53bf50f9f5165b94d9c8e4851472.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0006-48.png',
    services: {
      slack: {
        id: 'U0FPRSLDA',
        email: 'hjr.alistair@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0FPRSLDA',
        email: 'hjr.alistair@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Samer',
      familyName: 'Alrayes',
      fullName: 'Samer Alrayes',
      displayName: 'Samer Alrayes'
    },
    email: 'samer@egjpress.org',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2018-04-30/357036065031_a586cc0751970d91e4d0_original.jpg',
    dataSources: {
      google: {
        id: '108624666340649208857',
        emails: [
          {
            address: 'samer@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UA0FSPQ5Q',
        email: 'samer@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UA0FSPQ5Q',
        email: 'samer@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-04-03T17:25:58Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'samer'
  },
  {
    name: {
      givenName: 'Samer S',
      familyName: 'Alrayes',
      fullName: 'Samer S Alrayes',
      displayName: 'Samer Alrayes'
    },
    email: 'socalwriter93@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'socalwriter93@gmail.com',
          id: '94fce1fe-8582-4ee6-96c2-31d918ebc2ab',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-07-10T23:21:13+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Brenda J',
      familyName: 'Anderson',
      fullName: 'Brenda J Anderson',
      displayName: 'Brenda Anderson'
    },
    email: 'andx4@chariot.net.au',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'andx4@chariot.net.au',
          id: '2aa6552d-6fe2-4e65-88e1-b147cbb9db67',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2019-01-06T17:36:05+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Eliza',
      familyName: 'Archer',
      fullName: 'Eliza Archer',
      displayName: 'Eliza'
    },
    email: 'eliza254archer@hotmail.com',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2017-09-27/249100626359_45d0a9e9bb4076ca2dfe_original.jpg',
    services: {
      slack: {
        id: 'U0ZCD9ALW',
        email: 'eliza254archer@hotmail.com',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0ZCD9ALW',
        email: 'eliza254archer@hotmail.com'
      }
    },
    isDeleted: false,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Zoha',
      familyName: 'Arif',
      fullName: 'Zoha Arif',
      displayName: 'Zoha Arif'
    },
    email: 'zoha@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '102661791999127345238',
        emails: [
          {
            address: 'zoha862@gmail.com',
            type: 'other'
          },
          {
            address: 'zoha@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UJ22W7A3U',
        email: 'zoha@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'zoha@egjpress.org',
          id: '876ff0b8-5415-49e4-a9b8-9b8e9a988532'
        },
        personal: {
          email: 'zoha862@gmail.com',
          id: 'ae9a6540-ef70-420d-9afa-9a7b0753fab2',
          application: 12753657
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UJ22W7A3U',
        email: 'zoha@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '876ff0b8-5415-49e4-a9b8-9b8e9a988532',
        email: 'zoha@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2019-05-03T11:51:47Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'zoha',
    appliedDate: '2019-03-31T07:03:14+00:00'
  },
  {
    name: {
      givenName: 'Michael',
      familyName: 'Ashby',
      fullName: 'Michael Ashby',
      displayName: 'mashby2nd'
    },
    email: 'mashby2nd@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/7e357785832859f7a5620dcea69902d4.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0008-48.png',
    services: {
      slack: {
        id: 'U037GV6D5',
        email: 'mashby2nd@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U037GV6D5',
        email: 'mashby2nd@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Jeremiah',
      familyName: 'Ashcraft',
      fullName: 'Jeremiah Ashcraft',
      displayName: 'jeremiaha'
    },
    email: 'jeremiah.ashcraft@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/9798d70dab1581126ba002c1b0f29eab.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0018-48.png',
    services: {
      slack: {
        id: 'U074YBZ6U',
        email: 'jeremiah.ashcraft@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U074YBZ6U',
        email: 'jeremiah.ashcraft@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Amber',
      familyName: 'Ashley',
      fullName: 'Amber Ashley',
      displayName: 'amber'
    },
    email: 'aashley@mail.usf.edu',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/6e4eba5fd48223a16ed6d3cd0ba67bda.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0018-48.png',
    services: {
      slack: {
        id: 'U08Q7PWHY',
        email: 'aashley@mail.usf.edu',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U08Q7PWHY',
        email: 'aashley@mail.usf.edu'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Alice',
      familyName: 'Austin',
      fullName: 'Alice Austin',
      displayName: 'Alice Austin'
    },
    email: 'alice@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '105099329619345002676',
        emails: [
          {
            address: 'alice.austin7@live.co.uk',
            type: 'other'
          },
          {
            address: 'alice@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UEHJPLKQW',
        email: 'alice@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'alice@egjpress.org',
          id: '903f49a4-ea15-4d6d-a799-81aece67e9ad'
        },
        personal: {
          email: 'alice.austin7@live.co.uk',
          id: '76d0532d-fa82-4e1b-bb24-5bf8fad13cf1',
          application: 11572338
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UEHJPLKQW',
        email: 'alice@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '903f49a4-ea15-4d6d-a799-81aece67e9ad',
        email: 'alice@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-11-29T15:12:38Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Alice',
    appliedDate: '2018-11-09T13:04:41+00:00'
  },
  {
    name: {
      givenName: 'JovelleAngeli',
      familyName: 'Avancena',
      fullName: 'JovelleAngeli Avancena',
      displayName: 'jovelle'
    },
    email: 'jovelleangeli@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2017-02-25/145760211680_9f84c5897dc4fb86e6fc_original.jpg',
    services: {
      slack: {
        id: 'U4AS1RE06',
        email: 'jovelleangeli@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U4AS1RE06',
        email: 'jovelleangeli@gmail.com'
      },
      submittable: {
        personal: {
          email: 'jovelleangeli@gmail.com',
          id: '51b64333-3062-4337-8b21-e07a57ca9f1d',
          application: 7295741
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2017-02-18T17:29:36+00:00'
  },
  {
    name: {
      givenName: 'Sydney',
      familyName: 'Babiak',
      fullName: 'Sydney Babiak',
      displayName: 'sydney'
    },
    email: 'sydney.babiak@yale.edu',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/7a74004aa5b55ece813e986e0529d823.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0008-48.png',
    services: {
      slack: {
        id: 'U19AG20GH',
        email: 'sydney.babiak@yale.edu',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U19AG20GH',
        email: 'sydney.babiak@yale.edu'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Constance',
      familyName: 'Backus-Schultz',
      fullName: 'Constance Backus-Schultz',
      displayName: 'Constance Schultz'
    },
    email: 'conshu51@tutanota.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'conshu51@tutanota.com',
          id: 'dd1e8822-d0c1-415d-8f3f-ce413001b40d',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-01-16T12:19:10+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Jaime R',
      familyName: 'Balboa',
      fullName: 'Jaime R Balboa',
      displayName: 'Jaime Balboa'
    },
    email: 'jbalboa@college.ucla.edu',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'jbalboa@college.ucla.edu',
          id: 'f9f67368-4f75-42a1-be1e-91734d91273d',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-09-26T22:12:18+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Jaime ',
      familyName: 'Balboa',
      fullName: 'Jaime Balboa',
      displayName: 'Jaime Balboa'
    },
    email: 'jaime@egjpress.org',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2018-04-04/342343134823_d35a7907cc5966ae0ecc_original.jpg',
    dataSources: {
      google: {
        id: '109861508440136942841',
        emails: [
          {
            address: 'jaime@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UA0QSHTD1',
        email: 'jaime@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UA0QSHTD1',
        email: 'jaime@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-04-04T09:22:50Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'jaime'
  },
  {
    name: {
      givenName: 'Prarthana',
      familyName: 'Banikya',
      fullName: 'Prarthana Banikya',
      displayName: 'Prarthana Banikya'
    },
    email: 'banikya.prarthana@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'banikya.prarthana@gmail.com',
          id: 'b7d79ac1-a191-4f9c-9e3c-df918a44461b',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-02-24T03:09:55+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Jessica',
      familyName: 'Barber',
      fullName: 'Jessica Barber',
      displayName: 'jessica'
    },
    email: 'jbarber09@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/0251d6bc98ba0406c7ceaa1e64585dee.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0008-48.png',
    services: {
      slack: {
        id: 'U03BVTEEX',
        email: 'jbarber09@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U03BVTEEX',
        email: 'jbarber09@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Sarah',
      familyName: 'Barker',
      fullName: 'Sarah Barker',
      displayName: 'srhbrkr'
    },
    email: 'srhbrkr@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/45f056e8c0ff3cb6dd83ca657641e5ba.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0022-48.png',
    services: {
      slack: {
        id: 'U5F3ULCJE',
        email: 'srhbrkr@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U5F3ULCJE',
        email: 'srhbrkr@gmail.com'
      },
      submittable: {
        personal: {
          email: 'srhbrkr@gmail.com',
          id: '3d2b3f86-3980-42a7-a33a-212f9ef1cde7',
          application: 7885829
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2017-05-16T21:00:42+00:00'
  },
  {
    name: {
      givenName: 'Stephanie',
      familyName: 'Barker-Drew',
      fullName: 'Stephanie Barker-Drew',
      displayName: 'stephbarkerdrew'
    },
    email: 'stephbarkerdrew@hotmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/9b78a8f73585c8069f3a1af45e91884a.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0024-48.png',
    services: {
      slack: {
        id: 'U1NBHPGSG',
        email: 'stephbarkerdrew@hotmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U1NBHPGSG',
        email: 'stephbarkerdrew@hotmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Sam',
      familyName: 'Barringer',
      fullName: 'Sam Barringer',
      displayName: 'Sam Barringer'
    },
    email: 'sam@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '100831580741394522009',
        emails: [
          {
            address: 'sbarringer2001@hotmail.com',
            type: 'other'
          },
          {
            address: 'sam@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UJ74ZTLC9',
        email: 'sam@egjpress.org'
      },
      submittable: {
        personal: {
          email: 'sbarringer2001@hotmail.com',
          id: '1f0fcd89-06a4-4c48-8537-420be153492d',
          application: 11865820
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UJ74ZTLC9',
        email: 'sam@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2019-05-03T11:30:27Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'sam',
    appliedDate: '2018-12-18T13:10:51+00:00'
  },
  {
    name: {
      givenName: 'Sarah',
      familyName: 'Barz',
      fullName: 'Sarah Barz',
      displayName: 'Sarah Barz'
    },
    email: 'sebarz@frontier.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'sebarz@frontier.com',
          id: 'f5bb3efe-f213-49c8-80b5-cb7f69380592',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-08-09T14:45:29+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Maurice',
      familyName: 'Beaulieu',
      fullName: 'Maurice Beaulieu',
      displayName: 'moe'
    },
    email: 'mrb0978@cox.net',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/fbab0171daee1c15fcc81bed4289632d.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0013-48.png',
    services: {
      slack: {
        id: 'U037Q0SJP',
        email: 'mrb0978@cox.net',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U037Q0SJP',
        email: 'mrb0978@cox.net'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Chris',
      familyName: 'Bedell',
      fullName: 'Chris Bedell',
      displayName: 'cbwriter21'
    },
    email: 'cjohnbedell@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/883af2ac476121e2b3316be7878acf87.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0014-48.png',
    services: {
      slack: {
        id: 'U11KH6H2N',
        email: 'cjohnbedell@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U11KH6H2N',
        email: 'cjohnbedell@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Taylor',
      familyName: 'Bell',
      fullName: 'Taylor Bell',
      displayName: 'Taylor Bell'
    },
    email: 'taylor@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-03-27/336658840898_476ba9dfcdcf4f405954_original.jpg',
    dataSources: {
      google: {
        id: '100908460538509280575',
        emails: [
          {
            address: 'taylor@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U9T5BFL0Z',
        email: 'taylor@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U9T5BFL0Z',
        email: 'taylor@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-03-22T21:00:57Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'taylor'
  },
  {
    name: {
      givenName: 'Taylor',
      familyName: 'Bell',
      fullName: 'Taylor Bell',
      displayName: 'Taylor Bell'
    },
    email: 'taylorb123123@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'taylorb123123@gmail.com',
          id: 'b6145ce5-983c-4a0a-ba76-54e028ef1d96',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-01-29T22:52:39+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Judith',
      familyName: 'Bernstein',
      fullName: 'Judith Bernstein',
      displayName: 'jamber'
    },
    email: 'ryewit@live.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/3f9e3a51601bb0c8a83d2e5c494091b6.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0015-48.png',
    services: {
      slack: {
        id: 'U03A59F2X',
        email: 'ryewit@live.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U03A59F2X',
        email: 'ryewit@live.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'April Mae',
      familyName: 'Berza',
      fullName: 'April Mae Berza',
      displayName: 'shakespril'
    },
    email: 'april.mae.berza@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/6d0b33f9f8defb212572f0dc0d5aaed4.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0007-48.png',
    services: {
      slack: {
        id: 'U224NA2NQ',
        email: 'april.mae.berza@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U224NA2NQ',
        email: 'april.mae.berza@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Aarushi ',
      familyName: 'Bhardwaj',
      fullName: 'Aarushi Bhardwaj',
      displayName: 'Aarushi Bhardwaj'
    },
    email: 'aarushi@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '101958799942965369762',
        emails: [
          {
            address: 'aarushi@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UBNTS3BAT',
        email: 'aarushi@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UBNTS3BAT',
        email: 'aarushi@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-07-10T11:54:14Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'aarushi'
  },
  {
    name: {
      givenName: 'Aarushi',
      familyName: 'Bhardwaj',
      fullName: 'Aarushi Bhardwaj',
      displayName: 'Aarushi Bhardwaj'
    },
    email: 'arushi.bhardwaj2001@gmail.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'arushi.bhardwaj2001@gmail.com',
          id: '4afd9c97-11e2-4bdc-96b0-301babac5bbb',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-04-06T12:13:56+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Aarushi',
      familyName: 'Bhardwaj',
      fullName: 'Aarushi Bhardwaj',
      displayName: 'Aarushi Bhardwaj'
    },
    email: 'arushi.bhardwaj2001@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'arushi.bhardwaj2001@gmail.com',
          id: '4afd9c97-11e2-4bdc-96b0-301babac5bbb',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-06-07T05:06:23+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Shinjini',
      familyName: 'Bhattacharjee',
      fullName: 'Shinjini Bhattacharjee',
      displayName: 'shinjini'
    },
    email: 'sbhattacharjee732@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/63756cb083a229e85973a3cdd7769110.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0009-48.png',
    services: {
      slack: {
        id: 'U0380F5L2',
        email: 'sbhattacharjee732@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0380F5L2',
        email: 'sbhattacharjee732@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Steph',
      familyName: 'Bianchini',
      fullName: 'Steph Bianchini',
      displayName: 'spb_rxh'
    },
    email: 'stephenbianchini@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/eb34e47830d59b2e063d06a559099be0.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0017-48.png',
    services: {
      slack: {
        id: 'U19EPSK9P',
        email: 'stephenbianchini@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      },
      submittable: {
        id: 'b46f141b-f9e7-4eba-9fb5-762df5b52dc9',
        email: 'stephenbianchini@gmail.com',
        enabled: true
      }
    },
    dataSources: {
      slack: {
        id: 'U19EPSK9P',
        email: 'stephenbianchini@gmail.com'
      },
      submittable: {
        staff: {
          email: 'stephenbianchini@gmail.com',
          id: 'b46f141b-f9e7-4eba-9fb5-762df5b52dc9'
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Chris',
      familyName: 'Bingley',
      fullName: 'Chris Bingley',
      displayName: 'Chris Bingley'
    },
    email: 'chris.bingley@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'chris.bingley@gmail.com',
          id: '97acd37f-cf23-4e9e-87a5-b51698357135',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-08-31T12:30:14+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Chris',
      familyName: 'Bingley',
      fullName: 'Chris Bingley',
      displayName: 'Chris Bingley'
    },
    email: 'chris@egjpress.org',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2018-03-21/334950364855_8756b8d8fbefedb8af93_original.jpg',
    dataSources: {
      google: {
        id: '113602427515075543563',
        emails: [
          {
            address: 'chris@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U9TLACUJW',
        email: 'chris@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U9TLACUJW',
        email: 'chris@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-03-22T20:59:18Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'Chris'
  },
  {
    name: {
      givenName: 'Raven',
      familyName: 'Black',
      fullName: 'Raven Black',
      displayName: 'raven'
    },
    email: 'typing.raven@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2017-02-15/141299703056_f9a4d6976956f04ce0c2_original.jpg',
    services: {
      slack: {
        id: 'U458AS0NL',
        email: 'typing.raven@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U458AS0NL',
        email: 'typing.raven@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Cailey',
      familyName: 'Blair',
      fullName: 'Cailey Blair',
      displayName: 'cailey_b'
    },
    email: 'cailey@blairfamilyonline.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/0d7120409046ffb1339f4b83f35e44e9.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0023-48.png',
    services: {
      slack: {
        id: 'U6B8XRNH4',
        email: 'cailey@blairfamilyonline.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U6B8XRNH4',
        email: 'cailey@blairfamilyonline.com'
      },
      submittable: {
        personal: {
          email: 'cailey@blairfamilyonline.com',
          id: '64d3a204-f483-4b65-9510-019ae37e7a2d',
          application: 8176152
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2017-07-14T13:19:27+00:00'
  },
  {
    name: {
      givenName: 'Katie',
      familyName: 'Blanchette',
      fullName: 'Katie Blanchette',
      displayName: 'katie'
    },
    email: 'ktblanchette@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/7fb32a0544e9a5a30d98c859f5e69166.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0016-48.png',
    services: {
      slack: {
        id: 'U03QT32GG',
        email: 'ktblanchette@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U03QT32GG',
        email: 'ktblanchette@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Patrick',
      familyName: 'Bloniasz',
      fullName: 'Patrick Bloniasz',
      displayName: 'Patrick Bloniasz'
    },
    email: 'patrick@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-03-21/333291161233_5e801b84dc6072aef23f_original.png',
    dataSources: {
      google: {
        id: '102309334320343711554',
        emails: [
          {
            address: 'patrick.bloniasz@gmail.com',
            type: 'other'
          },
          {
            address: 'patrick@egjpress.org',
            primary: true
          },
          {
            address: 'patrick.bloniasz@egjpress.org'
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U9T3SP069',
        email: 'patrick@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'patrick@egjpress.org',
          id: '6787b7f3-fa05-4ff1-aa09-db1fc2411cde'
        },
        personal: {
          email: 'patrick.bloniasz@gmail.com',
          id: 'cf612bfd-4d86-4e99-a598-6edd36633cd1',
          application: 9604449
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U9T3SP069',
        email: 'patrick@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '6787b7f3-fa05-4ff1-aa09-db1fc2411cde',
        email: 'patrick@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-03-20T15:42:57Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Patrick',
    appliedDate: '2018-02-08T11:19:20+00:00'
  },
  {
    name: {
      givenName: 'Lindsay',
      familyName: 'Bohls',
      fullName: 'Lindsay Bohls',
      displayName: 'lindsay'
    },
    email: 'lnil1615@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/53805b05305edce7e3a4ea34218f1ba4.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0003-48.png',
    services: {
      slack: {
        id: 'U6ACPG5CJ',
        email: 'lnil1615@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U6ACPG5CJ',
        email: 'lnil1615@gmail.com'
      },
      submittable: {
        personal: {
          email: 'lnil1615@gmail.com',
          id: '37976fc9-9476-4a74-825f-8e77ad66c58c',
          application: 8132664
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2017-07-05T16:46:12+00:00'
  },
  {
    name: {
      givenName: 'Dr Dhrubajyoti',
      familyName: 'Bora',
      fullName: 'Dr Dhrubajyoti Bora',
      displayName: 'Dr Dhrubajyoti Bora'
    },
    email: 'dhruba40.db@gmail.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'dhruba40.db@gmail.com',
          id: '4cfa2cbe-8658-4cd6-a877-e1d7749a52c4',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-11-28T00:08:50+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Elena',
      familyName: 'Botts',
      fullName: 'Elena Botts',
      displayName: 'eab'
    },
    email: 'elenabotts@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/6c9d2af7ce4a2b2c4815581104bbc31a.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0010-48.png',
    services: {
      slack: {
        id: 'U3HM0JFNC',
        email: 'elenabotts@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U3HM0JFNC',
        email: 'elenabotts@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Jack',
      familyName: 'Bowerman',
      fullName: 'Jack Bowerman',
      displayName: 'Jack Bowerman'
    },
    email: 'jack@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '116101352715170957294',
        emails: [
          {
            address: 'bowermanj17@gmail.com',
            type: 'other'
          },
          {
            address: 'jack@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UJ22G6CJE',
        email: 'jack@egjpress.org'
      },
      submittable: {
        personal: {
          email: 'bowermanj17@gmail.com',
          id: '7ef4d2d6-0ed5-4bf3-9684-11a723e25a82',
          application: 11859121
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UJ22G6CJE',
        email: 'jack@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2019-05-03T11:29:57Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'jack',
    appliedDate: '2018-12-17T13:12:08+00:00'
  },
  {
    name: {
      givenName: 'Emily',
      familyName: 'Bowles',
      fullName: 'Emily Bowles',
      displayName: 'emmagrace1977'
    },
    email: 'emilybowles160@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/d71cfa260d08a6562b1576a60f7eb1f2.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0007-48.png',
    services: {
      slack: {
        id: 'U32FL3JS2',
        email: 'emilybowles160@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U32FL3JS2',
        email: 'emilybowles160@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Cat',
      familyName: 'Bracksmayer',
      fullName: 'Cat Bracksmayer',
      displayName: 'catjewels11'
    },
    email: 'catjewels11@aol.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/4d645de7ffe11b5195a93575ddc48171.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0026-48.png',
    services: {
      slack: {
        id: 'U03HDQ125',
        email: 'catjewels11@aol.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U03HDQ125',
        email: 'catjewels11@aol.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Anne',
      familyName: 'Bradshaw',
      fullName: 'Anne Bradshaw',
      displayName: 'anne'
    },
    email: 'abradshaw@outlook.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2017-09-23/245727131570_6fde6788a8c156ecaea1_original.png',
    services: {
      slack: {
        id: 'U03CFV5RX',
        email: 'abradshaw@outlook.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U03CFV5RX',
        email: 'abradshaw@outlook.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Caitlin',
      familyName: 'Bradshaw',
      fullName: 'Caitlin Bradshaw',
      displayName: 'caitlin'
    },
    email: 'caitlinsb@outlook.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/8ceade13568d8c5f2c58c7d6d40c6563.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0025-48.png',
    services: {
      slack: {
        id: 'U0DUYDN5C',
        email: 'caitlinsb@outlook.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0DUYDN5C',
        email: 'caitlinsb@outlook.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Rebecca',
      familyName: 'Bradshaw',
      fullName: 'Rebecca Bradshaw',
      displayName: 'rebecca'
    },
    email: 'rbradshaw@outlook.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/dc22a733304dbae9a22de816c4c7a8b2.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0024-48.png',
    services: {
      slack: {
        id: 'U06L9UL9F',
        email: 'rbradshaw@outlook.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U06L9UL9F',
        email: 'rbradshaw@outlook.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Lisa',
      familyName: 'Bren',
      fullName: 'Lisa Bren',
      displayName: 'lisabren'
    },
    email: 'lsg_11@hotmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/c354e9625b3137ef3b68d2dc72442c83.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0024-48.png',
    services: {
      slack: {
        id: 'U4APM7Q2J',
        email: 'lsg_11@hotmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U4APM7Q2J',
        email: 'lsg_11@hotmail.com'
      },
      submittable: {
        personal: {
          email: 'lsg_11@hotmail.com',
          id: '0b4a07cf-bf5c-4e63-8f09-e1434bc3be3c',
          application: 7209804
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2017-02-06T17:33:58+00:00'
  },
  {
    name: {
      givenName: 'Nadia',
      familyName: 'Brown',
      fullName: 'Nadia Brown',
      displayName: 'Nadia Brown'
    },
    email: 'nadia@egjpress.org',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2018-03-27/337219186786_e011c2fa7c5afeee5a5e_original.jpg',
    dataSources: {
      google: {
        id: '106785560436059277689',
        emails: [
          {
            address: 'nadia@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U9VT0NWTE',
        email: 'nadia@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U9VT0NWTE',
        email: 'nadia@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-03-26T08:30:31Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'nadia'
  },
  {
    name: {
      givenName: 'Nadia K',
      familyName: 'Brown',
      fullName: 'Nadia K Brown',
      displayName: 'Nadia Brown'
    },
    email: 'nbrown14@rogers.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'nbrown14@rogers.com',
          id: 'b1d32693-2560-4d43-8112-c93bd75f905b',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-01-30T20:14:54+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Caroliena',
      familyName: 'Cabada',
      fullName: 'Caroliena Cabada',
      displayName: 'Caroliena'
    },
    email: 'cecaroliena@gmail.com',
    status: 'Active',
    photoUrl:
      'https://secure.gravatar.com/avatar/fdac75e33ac8cdfde4b53180d8eeb16c.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0019-48.png',
    services: {
      slack: {
        id: 'U60SNE69E',
        email: 'cecaroliena@gmail.com',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U60SNE69E',
        email: 'cecaroliena@gmail.com'
      },
      submittable: {
        personal: {
          email: 'cecaroliena@gmail.com',
          id: '4b33dd4c-c181-4927-81d2-9e41e9932c16',
          application: 8082927
        }
      }
    },
    isDeleted: false,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2017-06-25T19:48:23+00:00'
  },
  {
    name: {
      givenName: 'Andrea',
      familyName: 'Callahan',
      fullName: 'Andrea Callahan',
      displayName: 'Andrea Callahan'
    },
    email: 'andrea@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '108272081348545391487',
        emails: [
          {
            address: 'acallahan426@gmail.com',
            type: 'other'
          },
          {
            address: 'andrea@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UD13QKFHS',
        email: 'andrea@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'andrea@egjpress.org',
          id: 'b7f72ea7-3272-4e26-a3dd-f1b8b4b2ba1c'
        },
        personal: {
          email: 'acallahan426@gmail.com',
          id: '72cd0b2e-9d84-4ef5-909a-94d4299c0fa8',
          application: 10857499
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UD13QKFHS',
        email: 'andrea@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: 'b7f72ea7-3272-4e26-a3dd-f1b8b4b2ba1c',
        email: 'andrea@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-09-26T10:13:49Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Andrea',
    appliedDate: '2018-08-03T10:09:23+00:00'
  },
  {
    name: {
      givenName: 'sally j',
      familyName: 'calma',
      fullName: 'sally j calma',
      displayName: 'sally calma'
    },
    email: 'ity3b@yahoo.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'ity3b@yahoo.com',
          id: '70fa3e1b-8828-44f5-b44c-7330c235e74b',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-02-15T12:51:13+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Rachelle R',
      familyName: 'Cameron',
      fullName: 'Rachelle R Cameron',
      displayName: 'Rachelle Cameron'
    },
    email: 'rachcam134@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'rachcam134@gmail.com',
          id: '94b37945-5e4d-4913-846d-f41df0b666d8',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-10-19T10:27:21+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Rachelle ',
      familyName: 'Cameron',
      fullName: 'Rachelle Cameron',
      displayName: 'Rachelle Cameron'
    },
    email: 'rachelle@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '100553069378796892231',
        emails: [
          {
            address: 'rcameron90@gmail.com',
            type: 'other'
          },
          {
            address: 'rachelle@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U9XAWR2RY',
        email: 'rachelle@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U9XAWR2RY',
        email: 'rachelle@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-03-28T08:42:22Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'rachelle'
  },
  {
    name: {
      givenName: 'Ashley',
      familyName: 'Capes',
      fullName: 'Ashley Capes',
      displayName: 'ashcapes'
    },
    email: 'mountain0ash@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/f1ee7f16bc3381a31be22ec4ecfd0367.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0020-48.png',
    services: {
      slack: {
        id: 'U0KN5NML2',
        email: 'mountain0ash@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0KN5NML2',
        email: 'mountain0ash@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Anton',
      familyName: 'Capri',
      fullName: 'Anton Capri',
      displayName: 'tonycapri'
    },
    email: 'acapri@ualberta.ca',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/96a8df968cfc8dd409774f94eac468e2.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0010-48.png',
    services: {
      slack: {
        id: 'U0376HT7X',
        email: 'acapri@ualberta.ca',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0376HT7X',
        email: 'acapri@ualberta.ca'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Mia',
      familyName: 'Carpenter',
      fullName: 'Mia Carpenter',
      displayName: 'Mia Carpenter'
    },
    email: 'mia@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2019-05-03/628056550631_1623f5dafa6ec3576dbb_original.png',
    dataSources: {
      google: {
        id: '115866891945699808510',
        emails: [
          {
            address: 'nakemiin.miyuh@gmail.com',
            type: 'other'
          },
          {
            address: 'mia@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UJ21Y1BCK',
        email: 'mia@egjpress.org'
      },
      submittable: {
        personal: {
          email: 'nakemiin.miyuh@gmail.com',
          id: '9be1ccb6-cf52-4137-9f38-3142dc1e8875',
          application: 13043402
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UJ21Y1BCK',
        email: 'mia@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2019-05-03T11:59:05Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'mia',
    appliedDate: '2019-05-02T15:09:03+00:00'
  },
  {
    name: {
      givenName: 'Amelia B',
      familyName: 'Carroll',
      fullName: 'Amelia B Carroll',
      displayName: 'Amelia Carroll'
    },
    email: 'amelia.carroll@eagles.cui.edu',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'amelia.carroll@eagles.cui.edu',
          id: 'c17e17f4-c118-4bb9-8368-7f328ac2fbc2',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-06-19T18:19:31+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Mary',
      familyName: 'Casey',
      fullName: 'Mary Casey',
      displayName: 'Mary'
    },
    email: 'mcctessa@gmail.com',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-01-11/298310482454_c22db93e3e83ae50eea5_original.png',
    services: {
      slack: {
        id: 'U0ZUUA81K',
        email: 'mcctessa@gmail.com',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '3143eab7-6d09-43d3-a78b-34fec7f00084',
        email: 'mcctessa@gmail.com',
        enabled: true
      }
    },
    dataSources: {
      slack: {
        id: 'U0ZUUA81K',
        email: 'mcctessa@gmail.com'
      },
      submittable: {
        staff: {
          email: 'mcctessa@gmail.com',
          id: '3143eab7-6d09-43d3-a78b-34fec7f00084'
        }
      }
    },
    isDeleted: false,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Jesslyn',
      familyName: 'Chain',
      fullName: 'Jesslyn Chain',
      displayName: 'demigodmuggle'
    },
    email: 'sophie@jesslynchain.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/c6d2db2d2ada2c19f4e274514144b96b.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0014-48.png',
    services: {
      slack: {
        id: 'U1YUT2TUL',
        email: 'sophie@jesslynchain.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U1YUT2TUL',
        email: 'sophie@jesslynchain.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Simran ',
      familyName: 'Chandra',
      fullName: 'Simran Chandra',
      displayName: 'Simran Chandra'
    },
    email: 'simran@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-07-07/393662852048_5902d352a6c64a1185e9_original.png',
    dataSources: {
      google: {
        id: '108181289371467308714',
        emails: [
          {
            address: 'chandrasimran@gmail.com',
            type: 'other'
          },
          {
            address: 'simran@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U9WNE577U',
        email: 'simran@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'simran@egjpress.org',
          id: '81437563-3869-4449-922f-093d7cdf219f'
        },
        personal: {
          email: 'chandrasimran@gmail.com',
          id: '489a8065-2fa2-4872-b94e-fb6e80b27fdf',
          application: 7409263
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U9WNE577U',
        email: 'simran@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '81437563-3869-4449-922f-093d7cdf219f',
        email: 'simran@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-03-27T12:26:54Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'simran',
    appliedDate: '2017-03-06T09:09:18+00:00'
  },
  {
    name: {
      givenName: 'Deborah',
      familyName: 'Chapin',
      fullName: 'Deborah Chapin',
      displayName: 'elle'
    },
    email: 'deborah.l.chapin@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/68746d1df98ba5d426755229edfb797d.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0019-48.png',
    services: {
      slack: {
        id: 'U039WTEB9',
        email: 'deborah.l.chapin@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U039WTEB9',
        email: 'deborah.l.chapin@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Laura',
      familyName: 'Chiu',
      fullName: 'Laura Chiu',
      displayName: 'laurac'
    },
    email: 'chiulaura20@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/e36961cd4b310720d6b93eb2d388a985.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0004-48.png',
    services: {
      slack: {
        id: 'U25KB2317',
        email: 'chiulaura20@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U25KB2317',
        email: 'chiulaura20@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'John',
      familyName: 'Chu',
      fullName: 'John Chu',
      displayName: 'john'
    },
    email: 'thatsme@johnchu.net',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/2c284406f6747fa17dad872634fa281c.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0021-48.png',
    services: {
      slack: {
        id: 'U03F0V3NC',
        email: 'thatsme@johnchu.net',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U03F0V3NC',
        email: 'thatsme@johnchu.net'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Jake',
      familyName: 'Coetzee',
      fullName: 'Jake Coetzee',
      displayName: 'Jake Coetzee'
    },
    email: 'jake@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2017-08-07/223232510995_7adc8411d165427345c2_original.jpg',
    dataSources: {
      google: {
        id: '100746087023102993658',
        emails: [
          {
            address: 'jakecoetzee.12@gmail.com',
            type: 'other'
          },
          {
            address: 'jake@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U6K7UE9J6',
        email: 'jake@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'jakecoetzee.12@gmail.com',
          id: 'd11f7848-4366-4ca5-83a0-155245627e5d'
        },
        personal: {
          email: 'jakecoetzee.12@gmail.com',
          id: 'd11f7848-4366-4ca5-83a0-155245627e5d',
          application: 8277116
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U6K7UE9J6',
        email: 'jake@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: 'd11f7848-4366-4ca5-83a0-155245627e5d',
        email: 'jakecoetzee.12@gmail.com',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-01-08T06:44:27Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Jake',
    appliedDate: '2017-08-01T16:02:22+00:00'
  },
  {
    name: {
      givenName: 'Jake',
      familyName: 'Coetzee',
      fullName: 'Jake Coetzee',
      displayName: 'Jake'
    },
    email: 'jake-deactivated@egjpress.org',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/786cc4be985b26bc19b86f19dd481cd7.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0005-48.png',
    services: {
      slack: {
        id: 'U8Q78CR43',
        email: 'jake-deactivated@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U8Q78CR43',
        email: 'jake-deactivated@egjpress.org'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Cory',
      familyName: 'Collins',
      fullName: 'Cory Collins',
      displayName: 'cory'
    },
    email: 'corycollins1@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/f0b107c17e175880dcbd7f0d8e3f9572.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0025-48.png',
    services: {
      slack: {
        id: 'U03A8UENC',
        email: 'corycollins1@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U03A8UENC',
        email: 'corycollins1@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Jane',
      familyName: 'Cowen',
      fullName: 'Jane Cowen',
      displayName: 'jane.c8'
    },
    email: 'j.cowen@outlook.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/0a0f13da91e5e0536400f55aee2dc680.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0003-48.png',
    services: {
      slack: {
        id: 'U03HEEPAU',
        email: 'j.cowen@outlook.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U03HEEPAU',
        email: 'j.cowen@outlook.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Julia',
      familyName: 'Cowle',
      fullName: 'Julia Cowle',
      displayName: 'julia'
    },
    email: 'juliacflowers1@aol.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/e6fbc9451b9d4783e7921d317cb9d461.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0018-48.png',
    services: {
      slack: {
        id: 'U03BDHE4K',
        email: 'juliacflowers1@aol.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U03BDHE4K',
        email: 'juliacflowers1@aol.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Ana',
      familyName: 'Crouch',
      fullName: 'Ana Crouch',
      displayName: 'anacrouch'
    },
    email: 'anacrouch@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/65dee0b79ce0452cca6f62ed4301350d.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0017-48.png',
    services: {
      slack: {
        id: 'U037X2R7A',
        email: 'anacrouch@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U037X2R7A',
        email: 'anacrouch@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Janhvi',
      familyName: 'D',
      fullName: 'Janhvi D',
      displayName: 'Janhvi D'
    },
    email: 'janhvi.duggal@yahoo.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'janhvi.duggal@yahoo.com',
          id: 'd1df249b-c013-4acc-80ff-dec9eca1e9d8',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-06-03T13:41:58+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Sharanya',
      familyName: 'Das',
      fullName: 'Sharanya Das',
      displayName: 'Sharanya Das'
    },
    email: 'sharanya@egjpress.org',
    status: 'Disabled',
    photoUrl: null,
    dataSources: {
      google: {
        id: '106668445042251777346',
        emails: [
          {
            address: 'sharanya@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UD16ALTBM',
        email: 'sharanya@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UD16ALTBM',
        email: 'sharanya@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-09-26T10:17:57Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'sharanya'
  },
  {
    name: {
      givenName: 'Sharanya',
      familyName: 'Das',
      fullName: 'Sharanya Das',
      displayName: 'Sharanya Das'
    },
    email: 'sharanyadas01@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'sharanyadas01@gmail.com',
          id: 'b638185e-1c5a-43f9-b64e-2b16564f35a7',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-07-06T03:05:03+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Prisha',
      familyName: 'Dayal',
      fullName: 'Prisha Dayal',
      displayName: 'Prisha Dayal'
    },
    email: 'prisha@egjarts.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '109867891978074509473',
        emails: [
          {
            address: 'prisha1@gmail.com',
            type: 'work'
          },
          {
            address: 'prisha@egjarts.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UQG9VHVT3',
        email: 'prisha@egjarts.org'
      },
      submittable: {
        staff: {
          email: 'prisha@egjarts.org',
          id: '97e205fe-5c84-48a9-958c-ee7620950de1'
        },
        personal: {
          email: 'prisha1@gmail.com',
          id: 'e198f4f7-2d0e-4c1f-a4a0-b9a77827a454',
          application: 13152193
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UQG9VHVT3',
        email: 'prisha@egjarts.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '97e205fe-5c84-48a9-958c-ee7620950de1',
        email: 'prisha@egjarts.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2019-11-19T11:48:42Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Prisha',
    appliedDate: '2019-05-17T22:32:30+00:00'
  },
  {
    name: {
      givenName: 'Prachi',
      familyName: 'Dayal',
      fullName: 'Prachi Dayal',
      displayName: 'Prachi Dayal'
    },
    email: 'prachi@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '109665324584850531316',
        emails: [
          {
            address: 'prachi.dayal8101@gmail.com',
            type: 'home'
          },
          {
            address: 'prachi@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UJ22L9CPL',
        email: 'prachi@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'prachi@egjpress.org',
          id: '90298a4c-dcc2-4369-9c20-dd01f60a8229'
        },
        personal: {
          email: 'prachi.dayal8101@gmail.com',
          id: '4923d693-d75d-4749-a123-1e9a1d4a1149',
          application: 12404678
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UJ22L9CPL',
        email: 'prachi@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '90298a4c-dcc2-4369-9c20-dd01f60a8229',
        email: 'prachi@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2019-05-03T11:36:13Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Prachi',
    appliedDate: '2019-02-19T16:13:47+00:00'
  },
  {
    name: {
      givenName: 'Nicola',
      familyName: 'De Nitti',
      fullName: 'Nicola De Nitti',
      displayName: 'Nicola De Nitti'
    },
    email: 'nicola@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '113835642820376586822',
        emails: [
          {
            address: 'nk.dn@outlook.com',
            type: 'other'
          },
          {
            address: 'nicola@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UEG439K43',
        email: 'nicola@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'nicola@egjpress.org',
          id: '092c796f-9aa9-4b7e-b523-05f2620faf76'
        },
        personal: {
          email: 'nk.dn@outlook.com',
          id: '2f905496-34a2-4139-82bc-a54a0128ea8d',
          application: 11596394
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UEG439K43',
        email: 'nicola@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '092c796f-9aa9-4b7e-b523-05f2620faf76',
        email: 'nicola@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-11-30T13:20:47Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'nico',
    appliedDate: '2018-11-13T05:19:20+00:00'
  },
  {
    name: {
      givenName: 'Kelsey',
      familyName: 'Dean',
      fullName: 'Kelsey Dean',
      displayName: 'Kelsey Dean'
    },
    email: 'kelsey@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2019-05-12/621744932530_15bd23c15598404d5c39_original.jpg',
    dataSources: {
      google: {
        id: '116793742167637180007',
        emails: [
          {
            address: 'deank@mail.gvsu.edu',
            type: 'other'
          },
          {
            address: 'kelsey@egjpress.org',
            primary: true
          },
          {
            address: 'kelsey@emberjournal.org'
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U5FBT177A',
        email: 'kelsey@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'deank@mail.gvsu.edu',
          id: '0bbb0c12-704b-42b2-8437-93c113fca0ee'
        },
        personal: {
          email: 'deank@mail.gvsu.edu',
          id: '0bbb0c12-704b-42b2-8437-93c113fca0ee',
          application: 7891698
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U5FBT177A',
        email: 'kelsey@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '0bbb0c12-704b-42b2-8437-93c113fca0ee',
        email: 'deank@mail.gvsu.edu',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2017-12-15T09:03:03Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Kelsey',
    appliedDate: '2017-05-18T02:18:18+00:00'
  },
  {
    name: {
      givenName: 'Kelsey',
      familyName: 'Dean',
      fullName: 'Kelsey Dean',
      displayName: 'kelsey'
    },
    email: 'duplicate.account.0001@none.such',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/b918ad0b9986636f87dbda0543e3f284.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0026-48.png',
    services: {
      slack: {
        id: 'UB92AUS0L',
        email: 'duplicate.account.0001@none.such',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'UB92AUS0L',
        email: 'duplicate.account.0001@none.such'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Deborah',
      familyName: 'DeFrank',
      fullName: 'Deborah DeFrank',
      displayName: 'Deborah DeFrank'
    },
    email: 'ddefrank71451@aol.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'ddefrank71451@aol.com',
          id: '47fef518-aedf-40c1-8f1f-16f24312b070',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2019-03-08T16:48:21+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Michelle',
      familyName: 'DeLouise',
      fullName: 'Michelle DeLouise',
      displayName: 'delouisell'
    },
    email: 'delouisell@hendrix.edu',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2017-06-28/204481164960_73fc352ed566d00b8cde_original.png',
    services: {
      slack: {
        id: 'U60NHRT5Z',
        email: 'delouisell@hendrix.edu',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U60NHRT5Z',
        email: 'delouisell@hendrix.edu'
      },
      submittable: {
        personal: {
          email: 'delouisell@hendrix.edu',
          id: '0045f1c2-b59b-4372-9de9-b232ea0e155a',
          application: 8028880
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2017-06-13T12:49:48+00:00'
  },
  {
    name: {
      givenName: 'Jan',
      familyName: 'DeRoest',
      fullName: 'Jan DeRoest',
      displayName: 'jderoest'
    },
    email: 'jderoest@comcast.net',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/77e30f4f282e02187b1b232fa523e7b1.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0023-48.png',
    services: {
      slack: {
        id: 'U03CK8R29',
        email: 'jderoest@comcast.net',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U03CK8R29',
        email: 'jderoest@comcast.net'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Aditi',
      familyName: 'Desai',
      fullName: 'Aditi Desai',
      displayName: 'Aditi Desai'
    },
    email: 'aditi@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '105105934294095450059',
        emails: [
          {
            address: 'aditidesai0806@gmail.com',
            type: 'other'
          },
          {
            address: 'aditi@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UJFACBQ7R',
        email: 'aditi@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'aditi@egjpress.org',
          id: '72c2d7be-d5b5-4665-9007-b2d233a4b714'
        },
        personal: {
          email: 'aditidesai0806@gmail.com',
          id: '72cc7fe6-93e1-4447-9ea9-edc56e48f36b',
          application: 12961153
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UJFACBQ7R',
        email: 'aditi@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '72c2d7be-d5b5-4665-9007-b2d233a4b714',
        email: 'aditi@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2019-05-03T11:56:57Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Aditi',
    appliedDate: '2019-04-25T19:31:00+00:00'
  },
  {
    name: {
      givenName: 'Shriya',
      familyName: 'Desai',
      fullName: 'Shriya Desai',
      displayName: 'Shriya Desai'
    },
    email: 'shriya@egjarts.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '117288993316404389371',
        emails: [
          {
            address: 'shriyadesai02@gmail.com',
            type: 'work'
          },
          {
            address: 'shriya@egjarts.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UQKP6U4PM',
        email: 'shriya@egjarts.org'
      },
      submittable: {
        staff: {
          email: 'shriya@egjarts.org',
          id: 'ce398ac5-211d-41e9-9117-3cdb9d24f62b'
        },
        personal: {
          email: 'shriyadesai02@gmail.com',
          id: '8d118a7a-6975-4400-bdf9-27eecfac6630',
          application: 13558890
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UQKP6U4PM',
        email: 'shriya@egjarts.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: 'ce398ac5-211d-41e9-9117-3cdb9d24f62b',
        email: 'shriya@egjarts.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2019-11-24T17:58:51Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Shriya',
    appliedDate: '2019-07-22T15:56:47+00:00'
  },
  {
    name: {
      givenName: 'Erica',
      familyName: 'Dietlein',
      fullName: 'Erica Dietlein',
      displayName: 'Erica Dietlein'
    },
    email: 'erica.c.guzzo@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'erica.c.guzzo@gmail.com',
          id: '3c825d6d-3700-4e33-88d6-a7c70ebac4db',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-05-12T02:47:16+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Erica ',
      familyName: 'Dietlein',
      fullName: 'Erica Dietlein',
      displayName: 'Erica Dietlein'
    },
    email: 'erica@egjpress.org',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2018-07-22/402850331234_12ec2a913b9879096a72_original.jpg',
    dataSources: {
      google: {
        id: '102732542009522963911',
        emails: [
          {
            address: 'erica@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UBGNWV9DM',
        email: 'erica@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UBGNWV9DM',
        email: 'erica@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-06-28T14:43:48Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'Erica D'
  },
  {
    name: {
      givenName: 'Sophia',
      familyName: 'Diggs-Galligan',
      fullName: 'Sophia Diggs-Galligan',
      displayName: 'sophiadg'
    },
    email: 's.diggsgalligan@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/e87c0734356ec543fa86c2b72a3800b0.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0006-48.png',
    services: {
      slack: {
        id: 'U056WPXNB',
        email: 's.diggsgalligan@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U056WPXNB',
        email: 's.diggsgalligan@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Erika',
      familyName: 'DiPasquale',
      fullName: 'Erika DiPasquale',
      displayName: 'Erika DiPasquale'
    },
    email: 'erika.dipasquale@me.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'erika.dipasquale@me.com',
          id: '0f8c24b2-0b5a-49c2-a3ac-ae75f0ab878b',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2019-06-25T14:59:34+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Erika',
      familyName: 'DiPasquale',
      fullName: 'Erika DiPasquale',
      displayName: 'Erika DiPasquale'
    },
    email: 'erika.dipasquale@me.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'erika.dipasquale@me.com',
          id: '0f8c24b2-0b5a-49c2-a3ac-ae75f0ab878b',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2019-06-25T15:11:07+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Sarah',
      familyName: 'Doebereiner',
      fullName: 'Sarah Doebereiner',
      displayName: 'sarahadoebereiner'
    },
    email: 'sarahadoebereiner@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/a2719b96967e56c8fa799c8ece2cf846.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0014-48.png',
    services: {
      slack: {
        id: 'U0F5JTYG5',
        email: 'sarahadoebereiner@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0F5JTYG5',
        email: 'sarahadoebereiner@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Alexandra',
      familyName: 'Donahue',
      fullName: 'Alexandra Donahue',
      displayName: 'Alexandra Donahue'
    },
    email: 'lexi.s.donahue@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'lexi.s.donahue@gmail.com',
          id: '8645c2e8-9859-42c9-abe2-345875f0cfcb',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2019-05-07T14:11:19+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Belinda',
      familyName: 'Draper',
      fullName: 'Belinda Draper',
      displayName: 'Belinda Draper'
    },
    email: 'belinda@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2015-06-30/7032397409_54b1e119ade199f35bdf_original.jpg',
    dataSources: {
      google: {
        id: '108224398117372073533',
        emails: [
          {
            address: 'bleedraper@gmail.com',
            type: 'other'
          },
          {
            address: 'belinda@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UERS46HA7',
        email: 'belinda@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'belinda@egjpress.org',
          id: '914cd116-0889-407c-bcdb-fb81cbe54f45'
        },
        personal: {
          email: 'bleedraper@gmail.com',
          id: 'c658bc55-8ef3-4dc7-9aa6-dbb950c68c27',
          application: 11772985
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UERS46HA7',
        email: 'belinda@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '914cd116-0889-407c-bcdb-fb81cbe54f45',
        email: 'belinda@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-12-10T12:44:25Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Belinda',
    appliedDate: '2018-12-05T23:28:18+00:00'
  },
  {
    name: {
      givenName: 'Katelyn',
      familyName: 'Dunne',
      fullName: 'Katelyn Dunne',
      displayName: 'Katelyn Dunne'
    },
    email: 'katelyn@egjpress.org',
    status: 'Disabled',
    photoUrl: null,
    dataSources: {
      google: {
        id: '109105137864359221796',
        emails: [
          {
            address: 'katelyn@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UAU548F0W',
        email: 'katelyn@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UAU548F0W',
        email: 'katelyn@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-05-21T10:21:55Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'katelyn'
  },
  {
    name: {
      givenName: 'Domonique',
      familyName: 'Eaddy',
      fullName: 'Domonique Eaddy',
      displayName: 'Domonique Eaddy'
    },
    email: 'domonique@egjarts.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2019-12-03/859950217639_639f65e45b0f8cdb6d4d_original.jpg',
    dataSources: {
      google: {
        id: '102317667695466275948',
        emails: [
          {
            address: 'eaddydomonique1@gmail.com',
            type: 'work'
          },
          {
            address: 'domonique@egjarts.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UQTRRRHLJ',
        email: 'domonique@egjarts.org'
      },
      submittable: {
        staff: {
          email: 'domonique@egjarts.org',
          id: '8964d388-945c-474d-bc32-e6c3ce137166'
        },
        personal: {
          email: 'eaddydomonique1@gmail.com',
          id: 'd8a0f540-a71f-4a1d-b0c4-0adca11b0f49',
          application: 13062195
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UQTRRRHLJ',
        email: 'domonique@egjarts.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '8964d388-945c-474d-bc32-e6c3ce137166',
        email: 'domonique@egjarts.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2019-12-02T19:34:08Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'domonique',
    appliedDate: '2019-05-05T16:54:26+00:00'
  },
  {
    name: {
      givenName: 'Julie B',
      familyName: 'Eisenlohr',
      fullName: 'Julie B Eisenlohr',
      displayName: 'Julie Eisenlohr'
    },
    email: 'eisenlohrj@gmail.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'eisenlohrj@gmail.com',
          id: '831ebe18-501a-418a-9b30-6572f1e95234',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-04-10T14:14:35+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Allie',
      familyName: 'Elkhadem',
      fullName: 'Allie Elkhadem',
      displayName: 'allieelk'
    },
    email: 'allieroses@aol.com',
    status: 'Active',
    photoUrl:
      'https://secure.gravatar.com/avatar/c1b0022e71e8421687f7b58c704821bd.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0023-48.png',
    services: {
      slack: {
        id: 'U2EU6GKS7',
        email: 'allieroses@aol.com',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U2EU6GKS7',
        email: 'allieroses@aol.com'
      }
    },
    isDeleted: false,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'David',
      familyName: 'Elswick',
      fullName: 'David Elswick',
      displayName: 'dave'
    },
    email: 'davidelswick@mail.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2015-03-28/4208907732_c8214979bb292a15f75d_original.jpg',
    services: {
      slack: {
        id: 'U037U4AP6',
        email: 'davidelswick@mail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U037U4AP6',
        email: 'davidelswick@mail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Fajr',
      familyName: 'Eutsey',
      fullName: 'Fajr Eutsey',
      displayName: 'Fajr Eutsey'
    },
    email: 'brightwisdom15@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'brightwisdom15@gmail.com',
          id: '7d49f2a1-17f9-4284-b6f8-73ede712091d',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2019-07-24T15:31:41+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Urooj',
      familyName: 'Fareed',
      fullName: 'Urooj Fareed',
      displayName: 'Urooj Fareed'
    },
    email: 'urooj@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-05-19/366099556304_c825cc0cabffd1d70530_original.png',
    dataSources: {
      google: {
        id: '104851944528749214923',
        emails: [
          {
            address: 'urooj.fareed2016@gmail.com',
            type: 'other'
          },
          {
            address: 'urooj@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UAS0B2BDX',
        email: 'urooj@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UAS0B2BDX',
        email: 'urooj@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-05-21T10:13:59Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'urooj'
  },
  {
    name: {
      givenName: 'Nadia',
      familyName: 'Farjami',
      fullName: 'Nadia Farjami',
      displayName: 'Nadia Farjami'
    },
    email: 'nadia877@icloud.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'nadia877@icloud.com',
          id: '6c01edcf-90d7-45bf-a8c4-3820eb3da445',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-08-06T17:42:29+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Nadia',
      familyName: 'Farjami',
      fullName: 'Nadia Farjami',
      displayName: 'Nadia Farjami'
    },
    email: 'nadiaf@egjpress.org',
    status: 'Disabled',
    photoUrl: null,
    dataSources: {
      google: {
        id: '113816219662381601130',
        emails: [
          {
            address: 'nadiaf@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U9Y2EUDN0',
        email: 'nadiaf@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U9Y2EUDN0',
        email: 'nadiaf@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-03-29T09:57:32Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'nadiaf'
  },
  {
    name: {
      givenName: 'Nadia',
      familyName: 'Farjami',
      fullName: 'Nadia Farjami',
      displayName: 'Nadia Farjami'
    },
    email: 'nadia877@icloud.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'nadia877@icloud.com',
          id: '6c01edcf-90d7-45bf-a8c4-3820eb3da445',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-10-25T00:28:08+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Veronica',
      familyName: 'Felipe',
      fullName: 'Veronica Felipe',
      displayName: 'Veronica Felipe'
    },
    email: 'veronica@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '103964920565616079919',
        emails: [
          {
            address: 'veronica@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UASH743S4',
        email: 'veronica@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UASH743S4',
        email: 'veronica@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-05-16T14:04:34Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'veronicaf'
  },
  {
    name: {
      givenName: 'Brian',
      familyName: 'Fence',
      fullName: 'Brian Fence',
      displayName: 'baobao'
    },
    email: 'brian@brianfence.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/15be82656edb7384bff08378a7b988ae.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0014-48.png',
    services: {
      slack: {
        id: 'U03HL6B7L',
        email: 'brian@brianfence.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U03HL6B7L',
        email: 'brian@brianfence.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Mackenna E',
      familyName: 'Finley',
      fullName: 'Mackenna E Finley',
      displayName: 'Mackenna Finley'
    },
    email: 'mefinleywriting@gmail.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'mefinleywriting@gmail.com',
          id: '5bbe4cdc-bd5c-4944-bdff-5a1d74c95c6a',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2019-05-07T13:00:47+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Orla',
      familyName: 'Fitzgerald',
      fullName: 'Orla Fitzgerald',
      displayName: 'Orla Fitzgerald'
    },
    email: 'orla@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '116439045319637771809',
        emails: [
          {
            address: 'orla.nic.gearailt@gmail.com',
            type: 'other'
          },
          {
            address: 'orla@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UEFDW0U3X',
        email: 'orla@egjpress.org'
      },
      submittable: {
        personal: {
          email: 'orla.nic.gearailt@gmail.com',
          id: '5128d673-2413-4b0b-b000-480aa3851c49',
          application: 11669596
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UEFDW0U3X',
        email: 'orla@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-11-29T15:11:45Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'orla',
    appliedDate: '2018-11-24T08:21:26+00:00'
  },
  {
    name: {
      givenName: 'Richard',
      familyName: 'Flores',
      fullName: 'Richard Flores',
      displayName: 'richard'
    },
    email: 'floresiv.richard@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/6189270933a7a77551dae5db40e0f9f6.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0003-48.png',
    services: {
      slack: {
        id: 'U06KK7J23',
        email: 'floresiv.richard@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U06KK7J23',
        email: 'floresiv.richard@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Stacey L',
      familyName: 'Forget',
      fullName: 'Stacey L Forget',
      displayName: 'Stacey Forget'
    },
    email: 'stacey.forget@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'stacey.forget@gmail.com',
          id: '61e52f83-996c-495a-8f47-d045a5e37293',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-04-04T18:54:31+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Stacey',
      familyName: 'Forget',
      fullName: 'Stacey Forget',
      displayName: 'Stacey Forget'
    },
    email: 'stacey@egjpress.org',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2018-04-30/355952192004_a32df30baab698571719_original.jpg',
    dataSources: {
      google: {
        id: '110850042362831999482',
        emails: [
          {
            address: 'stacey@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl:
          'https://www.google.com/s2/photos/private/AIbEiAIAAABECPqjqpSwgcbJlgEiC3ZjYXJkX3Bob3RvKigwNjNkZWE0ZGY0MWExNjM2YjZkNDYzOGEwYmMxM2Y2NDhlNDI1OWZiMAHnhpD0LoBq2rD6bUVWCkYlOyotZQ'
      },
      slack: {
        id: 'UA9549EHX',
        email: 'stacey@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UA9549EHX',
        email: 'stacey@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-04-19T14:00:54Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'stacey'
  },
  {
    name: {
      givenName: 'Charles',
      familyName: 'Franklin',
      fullName: 'Charles Franklin',
      displayName: 'nerdysavage'
    },
    email: 'ctfranklin28@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/ce00a14cd0d29e565f33b07c9cb98ef8.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0011-48.png',
    services: {
      slack: {
        id: 'U6EGDQVED',
        email: 'ctfranklin28@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U6EGDQVED',
        email: 'ctfranklin28@gmail.com'
      },
      submittable: {
        personal: {
          email: 'ctfranklin28@gmail.com',
          id: '9f159adc-2955-41ad-ad9d-f143c5226598',
          application: 8157428
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2017-07-11T06:38:02+00:00'
  },
  {
    name: {
      givenName: 'bianca',
      familyName: 'garcia',
      fullName: 'bianca garcia',
      displayName: 'bianca garcia'
    },
    email: 'biancamgarcia@yahoo.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'biancamgarcia@yahoo.com',
          id: 'aed51c29-a2a9-4e27-838a-1cf275809d2a',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-10-03T22:28:30+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Roshana',
      familyName: 'Ghaedi',
      fullName: 'Roshana Ghaedi',
      displayName: 'Roshana Ghaedi'
    },
    email: 'roshana@ghaedi.info',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'roshana@ghaedi.info',
          id: 'c1a02ed1-4e8e-4318-b868-33727d7435c9',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2019-06-21T14:34:24+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Taylor',
      familyName: 'Gianfrancisco',
      fullName: 'Taylor Gianfrancisco',
      displayName: 'Taylor Gianfrancisco'
    },
    email: 'taylorg@egjpress.org',
    status: 'Disabled',
    photoUrl: null,
    dataSources: {
      google: {
        id: '108177035861898834792',
        emails: [
          {
            address: 'taylorg@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U9UNS2LLX',
        email: 'taylorg@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U9UNS2LLX',
        email: 'taylorg@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-03-22T20:57:11Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'taylorg'
  },
  {
    name: {
      givenName: 'Taylor',
      familyName: 'Gianfrancisco',
      fullName: 'Taylor Gianfrancisco',
      displayName: 'Taylor Gianfrancisco'
    },
    email: 'tm.gianfrancisco@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'tm.gianfrancisco@gmail.com',
          id: 'b1d227a0-7903-4dd3-a333-a5c1b9badf44',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-12-29T09:43:12+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Baz Martin',
      familyName: 'Gibbons',
      fullName: 'Baz Martin Gibbons',
      displayName: 'B. Martin Gibbons'
    },
    email: 'baz.m.gibbons@gmail.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'baz.m.gibbons@gmail.com',
          id: 'f256a510-efd7-4f69-abc3-103a288e360a',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-03-07T17:58:06+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Sarah T',
      familyName: 'Gibson',
      fullName: 'Sarah T Gibson',
      displayName: 'Sarah Gibson'
    },
    email: 'sgibson@unca.edu',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'sgibson@unca.edu',
          id: 'b00ed0d4-5c21-4879-bac6-21f0b6610a6d',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-06-30T22:25:53+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Margaryta',
      familyName: 'Golovchenko',
      fullName: 'Margaryta Golovchenko',
      displayName: 'margaryta'
    },
    email: 'margaryta@ilmar.ca',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2015-11-02/13751904064_8f0ec9608d970d37c0b0_original.jpg',
    services: {
      slack: {
        id: 'U0DMWGHRS',
        email: 'margaryta@ilmar.ca',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0DMWGHRS',
        email: 'margaryta@ilmar.ca'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Jessica',
      familyName: 'Groenendijk',
      fullName: 'Jessica Groenendijk',
      displayName: 'jess'
    },
    email: 'jessica@wordsfromthewild.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/69345c3c4c2a1d4b16ada3f64ba456d9.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0021-48.png',
    services: {
      slack: {
        id: 'U3TT3DNTG',
        email: 'jessica@wordsfromthewild.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U3TT3DNTG',
        email: 'jessica@wordsfromthewild.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'David',
      familyName: 'Gwyn',
      fullName: 'David Gwyn',
      displayName: 'davidg'
    },
    email: 'david.r.gwyn@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/f1c82501839ecfac2f4a40f3386b4adb.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0024-48.png',
    services: {
      slack: {
        id: 'U5NHA9QM6',
        email: 'david.r.gwyn@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U5NHA9QM6',
        email: 'david.r.gwyn@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Ariel',
      familyName: 'Hafeman',
      fullName: 'Ariel Hafeman',
      displayName: 'hafemana'
    },
    email: 'hafemana@mtmary.edu',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/11bfcb3506466a747856d3c3c8c0e6fe.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0002-48.png',
    services: {
      slack: {
        id: 'U038L31C4',
        email: 'hafemana@mtmary.edu',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U038L31C4',
        email: 'hafemana@mtmary.edu'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Rylinn',
      familyName: 'Hale',
      fullName: 'Rylinn Hale',
      displayName: 'Rylinn Hale'
    },
    email: 'halryl0725a@mischools.org',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'halryl0725a@mischools.org',
          id: '9f92e62a-fa02-4c8f-8e74-8011d3607b22',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-12-20T10:25:30+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'alexandra',
      familyName: 'halfon',
      fullName: 'alexandra halfon',
      displayName: 'Alexandra Halfon'
    },
    email: 'abellh204@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'abellh204@gmail.com',
          id: '03e3527c-2524-4a5f-a145-2954316ab56c',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2019-06-20T15:23:38+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Karissa',
      familyName: 'Harlow',
      fullName: 'Karissa Harlow',
      displayName: 'Karissa Harlow'
    },
    email: 'karissa.harlow@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'karissa.harlow@gmail.com',
          id: '5e75368b-c9ca-434e-9eef-dba3f6f91a77',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-12-20T21:09:00+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Rainier',
      familyName: 'Harris',
      fullName: 'Rainier Harris',
      displayName: 'Rainier Harris'
    },
    email: 'rainier@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '117109940653363088128',
        emails: [
          {
            address: 'rainier@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UCE6ZFEA1',
        email: 'rainier@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UCE6ZFEA1',
        email: 'rainier@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-08-23T16:16:19Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'rainier'
  },
  {
    name: {
      givenName: 'Rainier A',
      familyName: 'Harris',
      fullName: 'Rainier A Harris',
      displayName: 'Rainier Harris'
    },
    email: 'princerainier3@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'princerainier3@gmail.com',
          id: 'e1a052fc-7787-4acd-a85d-85aac706d4ce',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-08-02T22:02:11+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Evanna',
      familyName: 'Hasan',
      fullName: 'Evanna Hasan',
      displayName: 'Evanna Hasan'
    },
    email: 'evanna@egjpress.org',
    status: 'Disabled',
    photoUrl: null,
    dataSources: {
      google: {
        id: '116120562908919747396',
        emails: [
          {
            address: 'evanna@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UD91EAX09',
        email: 'evanna@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UD91EAX09',
        email: 'evanna@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-10-02T09:09:33Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: ''
  },
  {
    name: {
      givenName: 'Evanna',
      familyName: 'Hasan',
      fullName: 'Evanna Hasan',
      displayName: 'evanna'
    },
    email: 'evanna@egjpress.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/91f495d71b2b782355e8905975df29ff.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0007-48.png',
    services: {
      slack: {
        id: 'UD1EDKCJZ',
        email: 'evanna@egjpress.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'UD1EDKCJZ',
        email: 'evanna@egjpress.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Evanna M',
      familyName: 'Hasan',
      fullName: 'Evanna M Hasan',
      displayName: 'Evanna Hasan'
    },
    email: 'evannahasan@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'evannahasan@gmail.com',
          id: 'a5419de7-a506-4e25-bacc-6c7dbe27e5b3',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-09-22T09:44:39+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Hannah',
      familyName: 'Hassler',
      fullName: 'Hannah Hassler',
      displayName: 'Hannah Hassler'
    },
    email: 'hannah@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-03-21/334863484855_78af7b6f888fe6ee1db8_original.jpg',
    dataSources: {
      google: {
        id: '107976994387445320694',
        emails: [
          {
            address: 'hannah.hassler0518@gmail.com',
            type: 'other'
          },
          {
            address: 'hannah@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl:
          'https://www.google.com/s2/photos/private/AIbEiAIAAABDCPaX2reaxP7ZbiILdmNhcmRfcGhvdG8qKDM5NTMzNzVmN2Q4ZDdmMWYxZDMyNzE0OTQ5NjE5ODc5OTMyYmQxZTUwAQEFUrmJfWRGtKzD6eaqCBanSd5-'
      },
      slack: {
        id: 'U9TJTQMK5',
        email: 'hannah@egjpress.org'
      },
      submittable: {
        personal: {
          email: 'hannah.hassler0518@gmail.com',
          id: 'bf9e067b-68a0-49a6-a945-a45e3b7d2f48',
          application: 9696275
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U9TJTQMK5',
        email: 'hannah@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-03-22T20:59:43Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'Hannah',
    appliedDate: '2018-02-19T15:47:06+00:00'
  },
  {
    name: {
      givenName: 'Lauren',
      familyName: 'Hawk',
      fullName: 'Lauren Hawk',
      displayName: 'Lauren Hawk'
    },
    email: 'lauren@egjpress.org',
    status: 'Disabled',
    photoUrl: null,
    dataSources: {
      google: {
        id: '115769597717868733474',
        emails: [
          {
            address: 'lauren@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UAANNA6Q7',
        email: 'lauren@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UAANNA6Q7',
        email: 'lauren@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-04-19T14:02:18Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'lauren'
  },
  {
    name: {
      givenName: 'Lauren A',
      familyName: 'Hawk',
      fullName: 'Lauren A Hawk',
      displayName: 'Lauren Hawk'
    },
    email: 'renhawk14@hotmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'renhawk14@hotmail.com',
          id: 'ef6b7f62-9483-46ef-96c0-474cb0540459',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-03-28T17:18:11+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Lauren E',
      familyName: 'Haynes',
      fullName: 'Lauren E Haynes',
      displayName: 'Lauren Haynes'
    },
    email: 'lehaynes@outlook.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'lehaynes@outlook.com',
          id: 'b2fc0c8d-7794-42f9-bb2d-31cec4215959',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-06-18T20:16:31+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Eva  ',
      familyName: 'Hays',
      fullName: 'Eva Hays',
      displayName: 'Eva Hays'
    },
    email: 'eva@egjpress.org',
    status: 'Disabled',
    photoUrl: null,
    dataSources: {
      google: {
        id: '115397746679847150926',
        emails: [
          {
            address: 'eva@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U9XJ58TPG',
        email: 'eva@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U9XJ58TPG',
        email: 'eva@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-03-27T12:27:52Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'Eva'
  },
  {
    name: {
      givenName: 'Eva C',
      familyName: 'Hays',
      fullName: 'Eva C Hays',
      displayName: 'Eva Hays'
    },
    email: 'evachays@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'evachays@gmail.com',
          id: '6695146b-116f-4902-aa37-ae2e09130c3d',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-11-25T14:55:36+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Joey',
      familyName: 'Hedger',
      fullName: 'Joey Hedger',
      displayName: 'Joey Hedger'
    },
    email: 'joey@egjarts.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2019-11-22/845871745652_b3c827425e163c3d192b_original.png',
    dataSources: {
      google: {
        id: '114892709962137369207',
        emails: [
          {
            address: 'joeyhedger@outlook.com',
            type: 'work'
          },
          {
            address: 'joey@egjarts.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UQVR5BEFN',
        email: 'joey@egjarts.org'
      },
      submittable: {
        staff: {
          email: 'joey@egjarts.org',
          id: '9beb97c3-5773-4d3e-91ed-f15531262f9e'
        },
        personal: {
          email: 'joeyhedger@outlook.com',
          id: 'a4b649b7-4907-4052-b058-9f0c048ab2ed',
          application: 14396168
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UQVR5BEFN',
        email: 'joey@egjarts.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '9beb97c3-5773-4d3e-91ed-f15531262f9e',
        email: 'joey@egjarts.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2019-11-22T22:09:02Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Joey',
    appliedDate: '2019-11-06T15:48:57+00:00'
  },
  {
    name: {
      givenName: 'Olivia',
      familyName: 'Herrin',
      fullName: 'Olivia Herrin',
      displayName: 'Olivia Herrin'
    },
    email: 'ogherrin0121@hotmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'ogherrin0121@hotmail.com',
          id: 'e08eb943-01c7-4e68-ac6a-d78bbf78526c',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2019-06-20T12:04:18+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'tyree',
      familyName: 'hill',
      fullName: 'tyree hill',
      displayName: 'tyree  hill'
    },
    email: 'hiltyr0315a@mischools.org',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'hiltyr0315a@mischools.org',
          id: '83d7f8ff-9a7c-4f03-a160-1300268b0879',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-12-20T10:26:16+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Molly',
      familyName: 'Hill',
      fullName: 'Molly Hill',
      displayName: 'mollyb'
    },
    email: 'hillmollyb@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/61ff6cbfa848b7f4283ab71a785482f9.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0000-48.png',
    services: {
      slack: {
        id: 'U0ME8L2UD',
        email: 'hillmollyb@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0ME8L2UD',
        email: 'hillmollyb@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Mariah',
      familyName: 'Hopkins',
      fullName: 'Mariah Hopkins',
      displayName: 'Mariah Hopkins'
    },
    email: 'mariah.hopkins53@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'mariah.hopkins53@gmail.com',
          id: '91558ead-7f2c-4635-9227-d153c6c03f56',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2019-06-15T17:52:08+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Julia',
      familyName: 'Hou',
      fullName: 'Julia Hou',
      displayName: 'julia.hou'
    },
    email: 'julia.j.hou8@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/a4bef3acc2c6ef8017d39823f797f216.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0020-48.png',
    services: {
      slack: {
        id: 'U0988L43H',
        email: 'julia.j.hou8@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0988L43H',
        email: 'julia.j.hou8@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Kelly',
      familyName: 'Howell',
      fullName: 'Kelly Howell',
      displayName: 'kelly'
    },
    email: 'kelly.e.howell@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/e67afdf6379bf697aa0a400450a0b7f0.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0019-48.png',
    services: {
      slack: {
        id: 'U037V6ACJ',
        email: 'kelly.e.howell@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U037V6ACJ',
        email: 'kelly.e.howell@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Kayla',
      familyName: 'Hoyet',
      fullName: 'Kayla Hoyet',
      displayName: 'kaylahoyet'
    },
    email: 'kayla.hoyet@hotmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/4a5fccacc4e416d6e03db4acd95a33e0.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0026-48.png',
    services: {
      slack: {
        id: 'U0371BZNY',
        email: 'kayla.hoyet@hotmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0371BZNY',
        email: 'kayla.hoyet@hotmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Brett',
      familyName: 'Humphreys',
      fullName: 'Brett Humphreys',
      displayName: 'brett'
    },
    email: 'bhumphreys811@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/084e59ccac80875c576b8ac4532ceac3.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0022-48.png',
    services: {
      slack: {
        id: 'U039FBY4L',
        email: 'bhumphreys811@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U039FBY4L',
        email: 'bhumphreys811@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Kelly',
      familyName: 'Hung',
      fullName: 'Kelly Hung',
      displayName: 'k.h.'
    },
    email: 'khung61@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2015-01-07/3349687633_110d914fed8d579ef0dd_original.jpg',
    services: {
      slack: {
        id: 'U038H1YLX',
        email: 'khung61@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U038H1YLX',
        email: 'khung61@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Kourtney',
      familyName: 'Husnick',
      fullName: 'Kourtney Husnick',
      displayName: 'kourtney'
    },
    email: 'kourtneyhusnick@gmail.com',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-01-15/299182268899_3b89fad33842c5c52b97_original.jpg',
    services: {
      slack: {
        id: 'U1YN61G93',
        email: 'kourtneyhusnick@gmail.com',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U1YN61G93',
        email: 'kourtneyhusnick@gmail.com'
      }
    },
    isDeleted: false,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Maryam',
      familyName: 'Idris',
      fullName: 'Maryam Idris',
      displayName: 'maryam352'
    },
    email: 'maryam352@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/70ca97bc55b1788f34b3b7475fa454bc.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0016-48.png',
    services: {
      slack: {
        id: 'U2FKNK0LD',
        email: 'maryam352@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U2FKNK0LD',
        email: 'maryam352@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Okta',
      familyName: 'Integration',
      fullName: 'Okta Integration',
      displayName: 'Okta Integration'
    },
    email: 'okta-integration@egjarts.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '110215620646575571818',
        emails: [
          {
            address: 'okta-integration@egjarts.org',
            primary: true
          },
          {
            address: 'super-admin@egjarts.org'
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UL8GKQ5D5',
        email: 'okta-integration@egjarts.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UL8GKQ5D5',
        email: 'okta-integration@egjarts.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-11-19T22:40:54Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'okta'
  },
  {
    name: {
      givenName: 'Ukachi V',
      familyName: 'Irobereachi',
      fullName: 'Ukachi V Irobereachi',
      displayName: 'Ukachi Irobereachi'
    },
    email: 'uirobere@nd.edu',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'uirobere@nd.edu',
          id: '8b492e3c-0146-4e15-ab4a-696bbd224f95',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-06-26T17:50:13+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Icarus',
      familyName: 'Irving',
      fullName: 'Icarus Irving',
      displayName: 'Icarus Irving'
    },
    email: 'graysencurrie@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'graysencurrie@gmail.com',
          id: '7b721eb2-1740-4961-ac69-54dae81d202c',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-07-04T15:18:18+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Alice',
      familyName: 'Jacobs',
      fullName: 'Alice Jacobs',
      displayName: 'Alice  Jacobs'
    },
    email: 'aliceremeresj@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'aliceremeresj@gmail.com',
          id: 'afa0ee29-0eda-4139-bb04-dee845325703',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2019-07-03T11:39:14+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Vanessa',
      familyName: 'Jähnert',
      fullName: 'Vanessa Jähnert',
      displayName: 'Vanessa Jähnert'
    },
    email: 'vanessa@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '111744130255707312010',
        emails: [
          {
            address: 'vanessajaehnert@gmail.com',
            type: 'other'
          },
          {
            address: 'vanessa@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UDUFRPQUS',
        email: 'vanessa@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'vanessa@egjpress.org',
          id: 'd5b68a3f-a704-4a1e-aa2a-225edf221134'
        },
        personal: {
          email: 'vanessajaehnert@gmail.com',
          id: '53e6a82e-4407-4941-b05a-383accca79b2',
          application: 11335824
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UDUFRPQUS',
        email: 'vanessa@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: 'd5b68a3f-a704-4a1e-aa2a-225edf221134',
        email: 'vanessa@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-11-15T08:56:30Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'vanessa',
    appliedDate: '2018-10-11T05:10:52+00:00'
  },
  {
    name: {
      givenName: 'Sara',
      familyName: 'Jhong',
      fullName: 'Sara Jhong',
      displayName: 'Sara Jhong'
    },
    email: 'saraj@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '108764451829465065001',
        emails: [
          {
            address: 'sarajhong64@gmail.com',
            type: 'other'
          },
          {
            address: 'saraj@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UJDFMADNU',
        email: 'saraj@egjpress.org'
      },
      submittable: {
        personal: {
          email: 'sarajhong64@gmail.com',
          id: '8ebd54cb-8327-4be2-a324-b8abab8c961c',
          application: 12982772
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UJDFMADNU',
        email: 'saraj@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2019-05-03T11:58:05Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'saraj',
    appliedDate: '2019-04-26T22:20:49+00:00'
  },
  {
    name: {
      givenName: 'Jiani A',
      familyName: 'Johnson',
      fullName: 'Jiani A Johnson',
      displayName: 'Jiani Johnson'
    },
    email: 'j.johnson160160@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'j.johnson160160@gmail.com',
          id: 'a4db2d8b-2442-4c3e-89f5-30ca83a4051f',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-03-21T15:14:42+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Jon',
      familyName: 'Jon',
      fullName: 'Jon',
      displayName: 'jon'
    },
    email: 'jmcgill254@live.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/70693b8b5acefd9b735f0592a79d1766.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0010-48.png',
    services: {
      slack: {
        id: 'U037JNAAK',
        email: 'jmcgill254@live.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U037JNAAK',
        email: 'jmcgill254@live.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Anton Taylor ',
      familyName: 'Jones',
      fullName: 'Anton Taylor Jones',
      displayName: 'Anton Taylor Jones'
    },
    email: 'anton@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-05-16/364727739137_ff75b0b8471d0cd8e426_original.png',
    dataSources: {
      google: {
        id: '103887863621721560090',
        emails: [
          {
            address: 'atjones43@outlook.com',
            type: 'other'
          },
          {
            address: 'anton@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UARSPDJFR',
        email: 'anton@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UARSPDJFR',
        email: 'anton@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-05-16T14:07:40Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'Anton'
  },
  {
    name: {
      givenName: 'Alyssa',
      familyName: 'Jordan',
      fullName: 'Alyssa Jordan',
      displayName: 'alyssajordan90'
    },
    email: 'ajordan90@live.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2017-03-13/154446112102_4798e46754bdb4470569_original.jpg',
    services: {
      slack: {
        id: 'U4JCY8DK8',
        email: 'ajordan90@live.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U4JCY8DK8',
        email: 'ajordan90@live.com'
      },
      submittable: {
        personal: {
          email: 'ajordan90@live.com',
          id: 'b1ff3caa-b5ff-45d6-859b-8681772b69b7',
          application: 7404911
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2017-03-05T15:58:04+00:00'
  },
  {
    name: {
      givenName: 'Lilia',
      familyName: 'Joy',
      fullName: 'Lilia Joy',
      displayName: 'Lilia Joy'
    },
    email: 'ljoy@murraystate.edu',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'ljoy@murraystate.edu',
          id: 'eae092a0-38d3-47eb-8899-e23e28499e05',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-09-07T00:04:32+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Lilia ',
      familyName: 'Joy',
      fullName: 'Lilia Joy',
      displayName: 'Lilia Joy'
    },
    email: 'lilia@egjpress.org',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2018-04-05/341549444592_dc27d74a57357d25ad9d_original.jpg',
    dataSources: {
      google: {
        id: '111419289893191334680',
        emails: [
          {
            address: 'lilia@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UA0CVBYHZ',
        email: 'lilia@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UA0CVBYHZ',
        email: 'lilia@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-04-03T17:30:45Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'lilia'
  },
  {
    name: {
      givenName: 'Joshita',
      familyName: 'Kamalakannan',
      fullName: 'Joshita Kamalakannan',
      displayName: 'Joshita Kamalakannan'
    },
    email: 'joshita@egjpress.org',
    status: 'Disabled',
    photoUrl: null,
    dataSources: {
      google: {
        id: '105244566487710960338',
        emails: [
          {
            address: 'joshita@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UBTDMQJKB',
        email: 'joshita@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UBTDMQJKB',
        email: 'joshita@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-07-20T08:12:54Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'joshita'
  },
  {
    name: {
      givenName: 'Durva',
      familyName: 'Kamdar',
      fullName: 'Durva Kamdar',
      displayName: 'Durva Kamdar'
    },
    email: 'durva@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '117804219409839183085',
        emails: [
          {
            address: 'kamdardurva@gmail.com',
            type: 'other'
          },
          {
            address: 'durva@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UJDFAE4GG',
        email: 'durva@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'durva@egjpress.org',
          id: 'ce2dc5a5-2190-4544-b183-c2e612aa2505'
        },
        personal: {
          email: 'kamdardurva@gmail.com',
          id: '1e8c55a8-77a6-411d-b388-a9b75a3dc86b',
          application: 12623243
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UJDFAE4GG',
        email: 'durva@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: 'ce2dc5a5-2190-4544-b183-c2e612aa2505',
        email: 'durva@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2019-05-03T11:40:58Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Durva',
    appliedDate: '2019-03-15T02:20:11+00:00'
  },
  {
    name: {
      givenName: 'Anna',
      familyName: 'Kander',
      fullName: 'Anna Kander',
      displayName: 'anna'
    },
    email: 'hawkeyewriter@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/25e00b1a3f9bbc97f77eb2e06fe8b5d8.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0019-48.png',
    services: {
      slack: {
        id: 'U6JNKDZPX',
        email: 'hawkeyewriter@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U6JNKDZPX',
        email: 'hawkeyewriter@gmail.com'
      },
      submittable: {
        personal: {
          email: 'hawkeyewriter@gmail.com',
          id: '80995433-4d31-409e-85e6-bba99d6a2f14',
          application: 8252157
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2017-07-28T18:32:55+00:00'
  },
  {
    name: {
      givenName: 'Alex',
      familyName: 'Kane',
      fullName: 'Alex Kane',
      displayName: 'alexjkane'
    },
    email: 'alexkanefiction@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/58943efb3d50abb752fcae3e73ad94c3.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0005-48.png',
    services: {
      slack: {
        id: 'U0LFSFP54',
        email: 'alexkanefiction@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0LFSFP54',
        email: 'alexkanefiction@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Sukhvir',
      familyName: 'Kaur',
      fullName: 'Sukhvir Kaur',
      displayName: 'Sukhvir Kaur'
    },
    email: 'skaur0208@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'skaur0208@gmail.com',
          id: '9b7bfa1b-5370-47d9-a696-aed3f6f12ee6',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2019-12-04T16:32:46+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Sarah',
      familyName: 'Kedar',
      fullName: 'Sarah Kedar',
      displayName: 'sarahkedar'
    },
    email: 'sarahnm.91@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/56fa47162cb48622d16e409ae8c241f4.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0022-48.png',
    services: {
      slack: {
        id: 'U3TQRU3JM',
        email: 'sarahnm.91@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U3TQRU3JM',
        email: 'sarahnm.91@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Sandy',
      familyName: 'Kemper',
      fullName: 'Sandy Kemper',
      displayName: 'sandy'
    },
    email: 'sandyswrite@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2015-08-22/9529729184_930ed44ce8d5c03d8121_original.jpg',
    services: {
      slack: {
        id: 'U09ER9ASW',
        email: 'sandyswrite@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U09ER9ASW',
        email: 'sandyswrite@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Joyce',
      familyName: 'Ker',
      fullName: 'Joyce Ker',
      displayName: 'Joyce Ker'
    },
    email: 'joyce@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '112877642837049213311',
        emails: [
          {
            address: 'joycekerjk@gmail.com',
            type: 'other'
          },
          {
            address: 'joyce@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UJCUNSY20',
        email: 'joyce@egjpress.org'
      },
      submittable: {
        personal: {
          email: 'joycekerjk@gmail.com',
          id: 'b21d25a0-c89d-4671-ab70-15ae54e4d57d',
          application: 12511567
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UJCUNSY20',
        email: 'joyce@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2019-05-03T11:38:36Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'Joyce',
    appliedDate: '2019-03-01T22:55:07+00:00'
  },
  {
    name: {
      givenName: 'Yumnah',
      familyName: 'Khan',
      fullName: 'Yumnah Khan',
      displayName: 'yumnahkhan'
    },
    email: 'yumnahkhanict@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/1897327392c44a4b5381f2c9eccc0581.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0010-48.png',
    services: {
      slack: {
        id: 'U6KVCU9KP',
        email: 'yumnahkhanict@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U6KVCU9KP',
        email: 'yumnahkhanict@gmail.com'
      },
      submittable: {
        personal: {
          email: 'yumnahkhanict@gmail.com',
          id: '13cd3689-0646-490a-80cf-a7073a692839',
          application: 8263026
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2017-07-31T07:47:30+00:00'
  },
  {
    name: {
      givenName: 'Tarana',
      familyName: 'Khan',
      fullName: 'Tarana Khan',
      displayName: 'tarana'
    },
    email: 'taranakhan213@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/259636a8ae318ec35ced5549cc5ed8cb.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0010-48.png',
    services: {
      slack: {
        id: 'U4QEH180N',
        email: 'taranakhan213@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U4QEH180N',
        email: 'taranakhan213@gmail.com'
      },
      submittable: {
        personal: {
          email: 'taranakhan213@gmail.com',
          id: 'b2359ef5-d77d-48b2-b8ba-ff3610788660',
          application: 7443582
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2017-03-10T22:20:59+00:00'
  },
  {
    name: {
      givenName: 'Jeffrey Thomas ',
      familyName: 'Kidd',
      fullName: 'Jeffrey Thomas Kidd',
      displayName: 'Jeffrey Thomas Kidd'
    },
    email: 'jeffrey@egjpress.org',
    status: 'Disabled',
    photoUrl: null,
    dataSources: {
      google: {
        id: '113855108569987327027',
        emails: [
          {
            address: 'jeffrey@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UAQRR8LT0',
        email: 'jeffrey@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UAQRR8LT0',
        email: 'jeffrey@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-05-15T10:57:10Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'jeffrey'
  },
  {
    name: {
      givenName: 'Joan',
      familyName: 'Kim',
      fullName: 'Joan Kim',
      displayName: 'Joan Kim'
    },
    email: 'joan@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '103268889669482943677',
        emails: [
          {
            address: 'joanskim18@gmail.com',
            type: 'other'
          },
          {
            address: 'joan@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UDTTD40LR',
        email: 'joan@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'joan@egjpress.org',
          id: 'd7e1453c-b6d3-42ef-9f89-d873c89d4c6e'
        },
        personal: {
          email: 'joanskim18@gmail.com',
          id: 'fbd38865-4564-4d15-bc45-4cbdad125ca4',
          application: 11296969
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UDTTD40LR',
        email: 'joan@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: 'd7e1453c-b6d3-42ef-9f89-d873c89d4c6e',
        email: 'joan@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-11-15T08:56:30Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Joan',
    appliedDate: '2018-10-05T18:12:03+00:00'
  },
  {
    name: {
      givenName: 'Kamal',
      familyName: 'Kimball',
      fullName: 'Kamal Kimball',
      displayName: 'kekimball'
    },
    email: 'kekimba@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2017-02-24/146823137191_3e22c3ae01e94a924752_original.jpg',
    services: {
      slack: {
        id: 'U4A1SQ7RR',
        email: 'kekimba@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U4A1SQ7RR',
        email: 'kekimba@gmail.com'
      },
      submittable: {
        personal: {
          email: 'kekimba@gmail.com',
          id: '1a32ed6f-d72e-48f6-8cd6-230edba3c41c',
          application: 7139027
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2017-01-28T23:52:07+00:00'
  },
  {
    name: {
      givenName: 'Alex',
      familyName: 'King',
      fullName: 'Alex King',
      displayName: 'alexking'
    },
    email: 'amk2062@yahoo.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2017-11-13/272497002134_715698f7d9f6c7e76c2c_original.jpg',
    services: {
      slack: {
        id: 'U5GRGA5RQ',
        email: 'amk2062@yahoo.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U5GRGA5RQ',
        email: 'amk2062@yahoo.com'
      },
      submittable: {
        personal: {
          email: 'amk2062@yahoo.com',
          id: '615b3f5d-e8fe-4d59-9e6a-adeb380bd32c',
          application: 7910450
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2017-05-22T14:27:16+00:00'
  },
  {
    name: {
      givenName: 'Cathleen P',
      familyName: 'Kivett Smith',
      fullName: 'Cathleen P Kivett Smith',
      displayName: 'Cathleen Kivett Smith'
    },
    email: 'ninjacathleen10@gmail.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'ninjacathleen10@gmail.com',
          id: '97c92f0f-e4a4-4b8c-a0c0-a37a75205e7f',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-06-11T12:52:38+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Chris',
      familyName: 'Klahn',
      fullName: 'Chris Klahn',
      displayName: 'klahnc'
    },
    email: 'lodebar@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/813a004be32903843e9bf7a8f51d6f58.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0009-48.png',
    services: {
      slack: {
        id: 'U03HHEUD8',
        email: 'lodebar@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U03HHEUD8',
        email: 'lodebar@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Harika',
      familyName: 'Kottakota',
      fullName: 'Harika Kottakota',
      displayName: 'harika'
    },
    email: 'harikakottakota@yahoo.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/4221acc0b4b3c53c00086e03ff4f9346.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0017-48.png',
    services: {
      slack: {
        id: 'U073QFZU7',
        email: 'harikakottakota@yahoo.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U073QFZU7',
        email: 'harikakottakota@yahoo.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Scott',
      familyName: 'Kraus',
      fullName: 'Scott Kraus',
      displayName: 'scottkraus'
    },
    email: 'scott@scottkraus.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/e573047c59550aa112041e1c4576a415.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0020-48.png',
    services: {
      slack: {
        id: 'U037EK4R5',
        email: 'scott@scottkraus.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U037EK4R5',
        email: 'scott@scottkraus.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Jordan',
      familyName: 'Kron',
      fullName: 'Jordan Kron',
      displayName: 'jnkron'
    },
    email: 'jnkron31@yahoo.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/020174dbb90dafdbbbd721674ee37d05.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0010-48.png',
    services: {
      slack: {
        id: 'U073P8HE1',
        email: 'jnkron31@yahoo.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U073P8HE1',
        email: 'jnkron31@yahoo.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'priya',
      familyName: 'kumar',
      fullName: 'priya kumar',
      displayName: 'priya kumar'
    },
    email: 'priya_bishalkumar@yahoo.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'priya_bishalkumar@yahoo.com',
          id: '411b8e00-e267-4737-a686-fb293dac0cd1',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2019-05-16T07:50:32+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Zineb',
      familyName: 'Laadioui',
      fullName: 'Zineb Laadioui',
      displayName: 'Zineb Laadioui'
    },
    email: 'laadiouizineb@gmail.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'laadiouizineb@gmail.com',
          id: '6c3feedd-7318-401f-b126-dde317fd1bfd',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-08-18T09:24:55+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Aimee',
      familyName: 'Lamoureux',
      fullName: 'Aimee Lamoureux',
      displayName: 'Aimee Lamoureux'
    },
    email: 'aimee@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '117106093804918758096',
        emails: [
          {
            address: 'aimeelamoureux17@gmail.com',
            type: 'other'
          },
          {
            address: 'aimee@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UJDDPMB6Z',
        email: 'aimee@egjpress.org'
      },
      submittable: {
        personal: {
          email: 'aimeelamoureux17@gmail.com',
          id: '9d1911a4-8897-46a3-b2e6-392931780998',
          application: 11826160
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UJDDPMB6Z',
        email: 'aimee@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2019-05-03T11:28:15Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'Aimee',
    appliedDate: '2018-12-13T10:32:22+00:00'
  },
  {
    name: {
      givenName: 'Dino',
      familyName: 'Laserbeam',
      fullName: 'Dino Laserbeam',
      displayName: 'Laserbeam'
    },
    email: 'laserbeam@freezeframefiction.com',
    status: 'Active',
    photoUrl:
      'https://secure.gravatar.com/avatar/d136e374d3305942ec04dd0c93a619f4.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0003-48.png',
    services: {
      slack: {
        id: 'UCVMBKXJA',
        email: 'laserbeam@freezeframefiction.com',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: 'efcaca61-8ea6-42da-b990-8271ccaaa62a',
        email: 'laserbeam@freezeframefiction.com',
        enabled: true
      }
    },
    dataSources: {
      slack: {
        id: 'UCVMBKXJA',
        email: 'laserbeam@freezeframefiction.com'
      },
      submittable: {
        staff: {
          email: 'laserbeam@freezeframefiction.com',
          id: 'efcaca61-8ea6-42da-b990-8271ccaaa62a'
        }
      }
    },
    isDeleted: false,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Sara',
      familyName: 'Lasko',
      fullName: 'Sara Lasko',
      displayName: 'Sara Lasko'
    },
    email: 'sara@egjpress.org',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2018-07-16/399348423268_00c7553f07c62551044b_original.jpg',
    dataSources: {
      google: {
        id: '103210945075272078431',
        emails: [
          {
            address: 'sara@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UBS7TCAGP',
        email: 'sara@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UBS7TCAGP',
        email: 'sara@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-07-16T13:45:06Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'sara'
  },
  {
    name: {
      givenName: 'Sara M',
      familyName: 'Laskoski',
      fullName: 'Sara M Laskoski',
      displayName: 'Sara Laskoski'
    },
    email: 'smlask09@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'smlask09@gmail.com',
          id: 'f68b3de8-8eed-4b48-a2dd-ceae0e69bb6e',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-05-08T17:35:20+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Anna',
      familyName: 'Leach',
      fullName: 'Anna Leach',
      displayName: 'Anna Leach'
    },
    email: 'anna@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '113373615553411631249',
        emails: [
          {
            address: 'leacha6@nku.edu',
            type: 'other'
          },
          {
            address: 'anna@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UJMMNFY5V',
        email: 'anna@egjpress.org'
      },
      submittable: {
        personal: {
          email: 'leacha6@nku.edu',
          id: '9addaa64-2d31-4eeb-b6a7-b3d2df6d48f3',
          application: 12644516
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UJMMNFY5V',
        email: 'anna@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2019-05-03T11:44:18Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'Anna',
    appliedDate: '2019-03-17T19:03:12+00:00'
  },
  {
    name: {
      givenName: 'John',
      familyName: 'Ledford',
      fullName: 'John Ledford',
      displayName: 'John Ledford'
    },
    email: 'john@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '100835661573456310908',
        emails: [
          {
            address: 'johnledford6@gmail.com',
            type: 'other'
          },
          {
            address: 'john@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UD2DRNV7H',
        email: 'john@egjpress.org'
      },
      submittable: {
        personal: {
          email: 'johnledford6@gmail.com',
          id: '7b595690-2a69-4ca6-bcfa-b09e8c7bd120',
          application: 10922711
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UD2DRNV7H',
        email: 'john@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-09-26T10:16:33Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'John',
    appliedDate: '2018-08-15T14:43:13+00:00'
  },
  {
    name: {
      givenName: 'Kimberly',
      familyName: 'Lee',
      fullName: 'Kimberly Lee',
      displayName: 'Kimberly Lee'
    },
    email: 'kimberlyylee@icloud.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'kimberlyylee@icloud.com',
          id: '33622b69-e7e7-4588-bbfe-c18a71136d18',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-08-15T14:19:13+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Catherine E',
      familyName: 'Lee',
      fullName: 'Catherine E Lee',
      displayName: 'Catherine Lee'
    },
    email: 'catherine.lee03@yahoo.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'catherine.lee03@yahoo.com',
          id: '92b56adb-6c11-40ee-8572-22f571d5b5b0',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2019-05-05T18:53:02+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Johanna',
      familyName: 'Lee',
      fullName: 'Johanna Lee',
      displayName: 'Johanna Lee'
    },
    email: 'johanna@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-12-14/504433497236_ddee16f67024df56dd42_original.png',
    dataSources: {
      google: {
        id: '103498066243750268905',
        emails: [
          {
            address: 'johannalee124@gmail.com',
            type: 'other'
          },
          {
            address: 'johanna@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UEF4W0BHR',
        email: 'johanna@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'johanna@egjpress.org',
          id: '69612401-1d35-470d-85a9-e61ef5a0a1b7'
        },
        personal: {
          email: 'johannalee124@gmail.com',
          id: '262b785b-1233-40a0-82c2-b9a868ff3efc',
          application: 11684401
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UEF4W0BHR',
        email: 'johanna@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '69612401-1d35-470d-85a9-e61ef5a0a1b7',
        email: 'johanna@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-11-29T15:08:08Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Johanna',
    appliedDate: '2018-11-26T17:00:40+00:00'
  },
  {
    name: {
      givenName: 'Heather E',
      familyName: 'Legg',
      fullName: 'Heather E Legg',
      displayName: 'Heather Legg'
    },
    email: 'heathereve20@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'heathereve20@gmail.com',
          id: 'f82cc324-b880-4a68-b568-2929ea04a0e7',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-01-28T15:14:17+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Angeline',
      familyName: 'Leong',
      fullName: 'Angeline Leong',
      displayName: 'Angeline Leong'
    },
    email: 'angeline@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '109658273409289322363',
        emails: [
          {
            address: 'angeline@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UBVDF5934',
        email: 'angeline@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UBVDF5934',
        email: 'angeline@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-07-23T18:06:44Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'angeline'
  },
  {
    name: {
      givenName: null,
      familyName: 'Leong',
      fullName: 'Angeline Leong',
      displayName: ''
    },
    email: 'zxangeline.l@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/b30634796879629e0a1aac6cd3deff7b.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0024-48.png',
    services: {
      slack: {
        id: 'UBSU6KD16',
        email: 'zxangeline.l@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'UBSU6KD16',
        email: 'zxangeline.l@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Kat',
      familyName: 'Lerner',
      fullName: 'Kat Lerner',
      displayName: 'kat'
    },
    email: 'kat.m.lerner@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/38e7c7792ad5daf385de6fbb235b1232.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0013-48.png',
    services: {
      slack: {
        id: 'U037ST2KD',
        email: 'kat.m.lerner@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U037ST2KD',
        email: 'kat.m.lerner@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Æden',
      familyName: 'Lewis',
      fullName: 'Æden Lewis',
      displayName: 'aeden.456'
    },
    email: 'aeden@totallyoutnumbered.com',
    status: 'Active',
    photoUrl:
      'https://secure.gravatar.com/avatar/d805aec5fb9599184762c935a73bba3c.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0017-48.png',
    services: {
      slack: {
        id: 'U038PUNBK',
        email: 'aeden@totallyoutnumbered.com',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U038PUNBK',
        email: 'aeden@totallyoutnumbered.com'
      }
    },
    isDeleted: false,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Jim',
      familyName: 'Lewis',
      fullName: 'Jim Lewis',
      displayName: 'Jim Lewis'
    },
    email: 'jim@egjarts.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2014-12-17/3246329593_f8eb133ed2b689bf3e87_original.jpg',
    dataSources: {
      google: {
        id: '118118503578531682020',
        emails: [
          {
            address: 'jim@jimbabwe.com',
            type: 'other'
          },
          {
            address: 'jim@egjarts.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U03718Y1L',
        email: 'jim@egjarts.org'
      },
      submittable: {
        staff: {
          email: 'jim@jimbabwe.com',
          id: '39e3368a-66f7-47b9-9f5d-cb674f82baaa'
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U03718Y1L',
        email: 'jim@egjarts.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '39e3368a-66f7-47b9-9f5d-cb674f82baaa',
        email: 'jim@jimbabwe.com',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-08-21T16:04:51Z',
    orgRoles: {
      foundation: [
        {
          name: 'Director',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Jim'
  },
  {
    name: {
      givenName: 'Jim',
      familyName: 'Lewis',
      fullName: 'Jim Lewis',
      displayName: 'jim'
    },
    email: 'obsolete@no-email.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/92933a79aa11ed1b439468906f0be145.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0005-48.png',
    services: {
      slack: {
        id: 'UCCKWNPGD',
        email: 'obsolete@no-email.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'UCCKWNPGD',
        email: 'obsolete@no-email.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Amy',
      familyName: 'Lewis',
      fullName: 'Amy Lewis',
      displayName: 'Amy Lewis'
    },
    email: 'amy@egjarts.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2019-01-15/524522033795_ce6e2ea62cd4ddf2a41b_original.png',
    dataSources: {
      google: {
        id: '118088333299603802405',
        emails: [
          {
            address: 'amy@jimbabwe.com',
            type: 'other'
          },
          {
            address: 'amy@egjarts.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U03HFCUHC',
        email: 'amy@egjarts.org'
      },
      submittable: {
        staff: {
          email: 'amy@egjarts.org',
          id: '5cb6a479-ddbf-43ef-9822-a105df7a7435'
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U03HFCUHC',
        email: 'amy@egjarts.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '5cb6a479-ddbf-43ef-9822-a105df7a7435',
        email: 'amy@egjarts.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2019-01-10T20:08:01Z',
    orgRoles: {
      foundation: [
        {
          name: 'Vice President',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Amy'
  },
  {
    name: {
      givenName: 'Amberly',
      familyName: 'Lewis',
      fullName: 'Amberly Lewis',
      displayName: 'Amberly Lewis'
    },
    email: 'amberly@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '110547741105634419339',
        emails: [
          {
            address: 'amberly@totallyoutnumbered.com',
            type: 'home'
          },
          {
            address: 'amberly@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U037FFRU1',
        email: 'amberly@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U037FFRU1',
        email: 'amberly@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2019-06-17T23:30:11Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'Amberly'
  },
  {
    name: {
      givenName: 'Brian',
      familyName: 'Lewis',
      fullName: 'Brian Lewis',
      displayName: 'Brian Lewis'
    },
    email: 'brian@egjarts.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2015-03-31/4252961534_b2adf201fb1e8010c8fa_original.jpg',
    dataSources: {
      google: {
        id: '109023025172812640696',
        emails: [
          {
            address: 'brian@egjarts.org',
            primary: true
          },
          {
            address: 'brian@egjpress.org'
          },
          {
            address: 'brian@sparkanthology.org.test-google-a.com'
          },
          {
            address: '*@sparkanthology.org'
          },
          {
            address: '*@sparkanthology.org.test-google-a.com'
          },
          {
            address: 'editor@sparkanthology.org'
          },
          {
            address: 'editor@emberjournal.org'
          },
          {
            address: 'editor@sparkanthology.org.test-google-a.com'
          },
          {
            address: 'editor@egjarts.org'
          },
          {
            address: 'brian@sparkanthology.org'
          },
          {
            address: 'editor@egjpress.org'
          },
          {
            address: 'brian@subreportable.com'
          },
          {
            address: 'brian@egjartsfoundation.org'
          },
          {
            address: 'president@egjarts.org'
          }
        ],
        thumbnailPhotoUrl:
          'https://www.google.com/s2/photos/public/AIbEiAIAAABDCLjjnofrso6cfSILdmNhcmRfcGhvdG8qKDQ5ZjZmY2E3ZTAxMDU4OTE1MzBmMjhmNzkzMzc5Yjg5MjNjY2I3NzQwAZv4j9OPpJc1VuwNUeFEDcQ_roK2'
      },
      slack: {
        id: 'U036YRMDR',
        email: 'brian@egjarts.org'
      },
      submittable: {
        staff: {
          email: 'editor@egjpress.org',
          id: '09b9fbb5-cf29-4fa0-aa57-f5a7ca379d36'
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U036YRMDR',
        email: 'brian@egjarts.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '09b9fbb5-cf29-4fa0-aa57-f5a7ca379d36',
        email: 'editor@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2012-10-21T00:35:13Z',
    orgRoles: {
      foundation: [
        {
          name: 'President',
          primary: true
        },
        {
          name: 'Volunteer',
          primary: false
        }
      ],
      press: [
        {
          name: 'Editor',
          primary: true
        },
        {
          name: 'Reader',
          primary: false
        }
      ]
    },
    displayName: 'Brian'
  },
  {
    name: {
      givenName: 'David',
      familyName: 'Lewis',
      fullName: 'David Lewis',
      displayName: 'David Lewis'
    },
    email: 'david@egjarts.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '117048666812108667332',
        emails: [
          {
            address: 'david@totallyoutnumbered.com',
            type: 'work'
          },
          {
            address: 'david@egjarts.org',
            primary: true
          },
          {
            address: 'david@egjpress.org'
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U0G0DGKDH',
        email: 'david@egjarts.org'
      },
      submittable: {
        staff: {
          email: 'david@egjpress.org',
          id: '1a42f83c-a0f5-4869-8450-abe172850e07'
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U0G0DGKDH',
        email: 'david@egjarts.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '1a42f83c-a0f5-4869-8450-abe172850e07',
        email: 'david@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2019-07-06T19:50:23Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'David'
  },
  {
    name: {
      givenName: 'Alexander',
      familyName: 'Lewis',
      fullName: 'Alexander Lewis',
      displayName: 'Alexander'
    },
    email: 'alexander@totallyoutnumbered.com',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2015-11-21/15091211282_52b1a042b862596d2c60_original.jpg',
    services: {
      slack: {
        id: 'U0F2MFUGH',
        email: 'alexander@totallyoutnumbered.com',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0F2MFUGH',
        email: 'alexander@totallyoutnumbered.com'
      }
    },
    isDeleted: false,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Caroline',
      familyName: 'Li',
      fullName: 'Caroline Li',
      displayName: 'caroline'
    },
    email: 'crli.umd@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/673881d59c02dabbd1b036752cc09470.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0021-48.png',
    services: {
      slack: {
        id: 'U037H634V',
        email: 'crli.umd@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U037H634V',
        email: 'crli.umd@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'April ',
      familyName: 'Liang',
      fullName: 'April Liang',
      displayName: 'April Liang'
    },
    email: 'april@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '112936158388275329413',
        emails: [
          {
            address: 'april@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UB3GD4338',
        email: 'april@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UB3GD4338',
        email: 'april@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-06-06T12:46:05Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'april'
  },
  {
    name: {
      givenName: 'Christopher',
      familyName: 'Liccardi',
      fullName: 'Christopher Liccardi',
      displayName: 'christopher.liccardi'
    },
    email: 'christopher.liccardi@outlook.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2014-12-18/3253261737_438b0b7d4b8fe04c9a3f_original.jpg',
    services: {
      slack: {
        id: 'U037ER6T1',
        email: 'christopher.liccardi@outlook.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U037ER6T1',
        email: 'christopher.liccardi@outlook.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Courtney',
      familyName: 'Liddell',
      fullName: 'Courtney Liddell',
      displayName: 'court'
    },
    email: 'cliddell.cl@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2014-12-21/3267782900_8e762d4c04332e37fec2_original.jpg',
    services: {
      slack: {
        id: 'U037VNUMN',
        email: 'cliddell.cl@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U037VNUMN',
        email: 'cliddell.cl@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Dai-Ning',
      familyName: 'Lin',
      fullName: 'Dai-Ning Lin',
      displayName: 'Dai-Ning Lin'
    },
    email: 'dai-ning@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-06-28/390878223079_8b590ae4954d5d7303da_original.png',
    dataSources: {
      google: {
        id: '115030424746320201601',
        emails: [
          {
            address: 'maggie.daining.lin@gmail.com',
            type: 'home'
          },
          {
            address: 'dai-ning@egjpress.org',
            primary: true
          },
          {
            address: 'daining@egjpress.org'
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UBFME5JQJ',
        email: 'dai-ning@egjpress.org'
      },
      submittable: {
        personal: {
          email: 'maggie.daining.lin@gmail.com',
          id: 'd89896b4-9193-4ece-836f-0331dd41b6f3',
          application: 10480324
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UBFME5JQJ',
        email: 'dai-ning@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-06-28T14:45:34Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'Dai-Ning',
    appliedDate: '2018-06-01T03:15:52+00:00'
  },
  {
    name: {
      givenName: 'Daniel',
      familyName: 'Lind',
      fullName: 'Daniel Lind',
      displayName: 'daniello'
    },
    email: 'lindhoffen@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2017-01-18/128332559056_9b407450fcfa8aee0b94_original.jpg',
    services: {
      slack: {
        id: 'U3TMDTY23',
        email: 'lindhoffen@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U3TMDTY23',
        email: 'lindhoffen@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'James M',
      familyName: 'Lindsay',
      fullName: 'James M Lindsay',
      displayName: 'James Lindsay'
    },
    email: 'mr.lindsayjm@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'mr.lindsayjm@gmail.com',
          id: '42681ce3-cc08-4f40-ad28-f335bce10c56',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-10-06T18:06:57+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'James',
      familyName: 'Lindsay',
      fullName: 'James Lindsay',
      displayName: 'James Lindsay'
    },
    email: 'james@egjpress.org',
    status: 'Disabled',
    photoUrl: null,
    dataSources: {
      google: {
        id: '105582742784511892152',
        emails: [
          {
            address: 'james@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UDVTE1S6A',
        email: 'james@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UDVTE1S6A',
        email: 'james@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-11-15T08:56:30Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'james'
  },
  {
    name: {
      givenName: 'Johanna',
      familyName: 'Lipford',
      fullName: 'Johanna Lipford',
      displayName: 'johannalipford'
    },
    email: 'johanna.lipford@iol.it',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/9d8c70638df0d95691194658b41ff8b5.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0004-48.png',
    services: {
      slack: {
        id: 'U0374A03M',
        email: 'johanna.lipford@iol.it',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0374A03M',
        email: 'johanna.lipford@iol.it'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Jourdan',
      familyName: 'Lobban',
      fullName: 'Jourdan Lobban',
      displayName: 'jourdan90'
    },
    email: 'wroteit82@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2017-06-29/206483274839_b8e170e525a4429e7c0c_original.png',
    services: {
      slack: {
        id: 'U62E14FB9',
        email: 'wroteit82@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U62E14FB9',
        email: 'wroteit82@gmail.com'
      },
      submittable: {
        personal: {
          email: 'wroteit82@gmail.com',
          id: '246c9e75-0aaa-48ac-828e-5a613a8f9a6b',
          application: 8072750
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2017-06-22T20:13:12+00:00'
  },
  {
    name: {
      givenName: 'Anthony',
      familyName: 'Lograsso',
      fullName: 'Anthony Lograsso',
      displayName: 'tony'
    },
    email: 'tonylograsso942@live.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/759eb5c66597348ef6129d1964271ce8.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0007-48.png',
    services: {
      slack: {
        id: 'U0V0XK1CY',
        email: 'tonylograsso942@live.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0V0XK1CY',
        email: 'tonylograsso942@live.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Marisa',
      familyName: 'Lopez',
      fullName: 'Marisa Lopez',
      displayName: 'Marisa Morales-Lopez'
    },
    email: 'marisa.lopez74@yahoo.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'marisa.lopez74@yahoo.com',
          id: 'd3f25dff-b5c4-4cdb-8c0b-647452ed30c9',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-03-07T10:07:39+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Betsy',
      familyName: 'Lulu',
      fullName: 'Betsy Lulu',
      displayName: 'Betsy'
    },
    email: 'betsylulu@outlook.com',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2015-11-19/14964554499_b9c384b7ca51a5aea35f_original.jpg',
    services: {
      slack: {
        id: 'U0374U24N',
        email: 'betsylulu@outlook.com',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0374U24N',
        email: 'betsylulu@outlook.com'
      }
    },
    isDeleted: false,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Amanda',
      familyName: 'Macchiarola',
      fullName: 'Amanda Macchiarola',
      displayName: 'amandamacc'
    },
    email: 'mandimoo0613@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2017-07-17/213268980209_99877973172d2cf2f20a_original.jpg',
    services: {
      slack: {
        id: 'U6ASEA9AT',
        email: 'mandimoo0613@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U6ASEA9AT',
        email: 'mandimoo0613@gmail.com'
      },
      submittable: {
        personal: {
          email: 'mandimoo0613@gmail.com',
          id: '5cf0951a-f230-48b3-b30f-71ae5e5d93db',
          application: 8115416
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2017-07-01T16:49:34+00:00'
  },
  {
    name: {
      givenName: 'Sophia',
      familyName: 'Magliocca',
      fullName: 'Sophia Magliocca',
      displayName: 'Sophia Magliocca'
    },
    email: 'sophia@egjarts.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2019-11-24/848869062135_bae856a244fd2d467b67_original.jpg',
    dataSources: {
      google: {
        id: '101448029909631224507',
        emails: [
          {
            address: 'sophia28@videotron.ca',
            type: 'work'
          },
          {
            address: 'sophia@egjarts.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UQW6PJZJQ',
        email: 'sophia@egjarts.org'
      },
      submittable: {
        staff: {
          email: 'sophia@egjarts.org',
          id: '0f4d1d16-3f03-440f-8221-3142adf04ec9'
        },
        personal: {
          email: 'sophia28@videotron.ca',
          id: 'd5173741-eea4-4ec3-854d-31b9427c5bd5',
          application: 14261536
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UQW6PJZJQ',
        email: 'sophia@egjarts.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '0f4d1d16-3f03-440f-8221-3142adf04ec9',
        email: 'sophia@egjarts.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2019-11-23T12:51:00Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Sophia M',
    appliedDate: '2019-10-22T14:16:31+00:00'
  },
  {
    name: {
      givenName: 'Noelle',
      familyName: 'Manushi',
      fullName: 'Noelle Manushi',
      displayName: 'Noelle Manushi'
    },
    email: 'noelle@egjpress.org',
    status: 'Disabled',
    photoUrl: null,
    dataSources: {
      google: {
        id: '118132506757209649216',
        emails: [
          {
            address: 'noelle@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UAC72LXUK',
        email: 'noelle@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UAC72LXUK',
        email: 'noelle@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-03-28T09:03:22Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'noellem'
  },
  {
    name: {
      givenName: 'Noel',
      familyName: 'Manushi',
      fullName: 'Noel Manushi',
      displayName: 'noelle'
    },
    email: 'noelmanush@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2018-05-26/370777948051_75ce38132ad0becd4648_original.jpg',
    services: {
      slack: {
        id: 'U69PJRW4S',
        email: 'noelmanush@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U69PJRW4S',
        email: 'noelmanush@gmail.com'
      },
      submittable: {
        personal: {
          email: 'noelmanush@gmail.com',
          id: 'a0b57620-a925-4838-b10f-65b51c133808',
          application: 8076524
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2017-06-23T17:34:20+00:00'
  },
  {
    name: {
      givenName: 'Anthony',
      familyName: 'Marchetta',
      fullName: 'Anthony Marchetta',
      displayName: 'anthony'
    },
    email: 'marchettaanthony@yahoo.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/58034ff459088ad67dbfae6e3b029a37.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0022-48.png',
    services: {
      slack: {
        id: 'U0F0ZNUP3',
        email: 'marchettaanthony@yahoo.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0F0ZNUP3',
        email: 'marchettaanthony@yahoo.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Alyssa M',
      familyName: 'Martin',
      fullName: 'Alyssa M Martin',
      displayName: 'Alyssa Martin'
    },
    email: 'alyssa323martin@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'alyssa323martin@gmail.com',
          id: 'f2429e02-6476-4166-833f-6255b44fbca0',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2019-05-31T01:09:17+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Bethany',
      familyName: 'Mary',
      fullName: 'Bethany Mary',
      displayName: 'Bethany'
    },
    email: 'bethanymary@usa.com',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2015-07-01/7129559749_48090ea372943051314f_original.jpg',
    services: {
      slack: {
        id: 'U073SPSKV',
        email: 'bethanymary@usa.com',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U073SPSKV',
        email: 'bethanymary@usa.com'
      }
    },
    isDeleted: false,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Samuel',
      familyName: 'Marzioli',
      fullName: 'Samuel Marzioli',
      displayName: 'marzioli'
    },
    email: 'samuel@marzioli.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/e3dbba607c1edbcb6b8b2bb439845cc6.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0011-48.png',
    services: {
      slack: {
        id: 'U039SJ65Z',
        email: 'samuel@marzioli.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U039SJ65Z',
        email: 'samuel@marzioli.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Veronica',
      familyName: 'Mattaboni',
      fullName: 'Veronica Mattaboni',
      displayName: 'veronica'
    },
    email: 'veronicamattaboni@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/d41df16d350075ee6b4d88661847e3bc.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0015-48.png',
    services: {
      slack: {
        id: 'U6KBXCJM9',
        email: 'veronicamattaboni@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U6KBXCJM9',
        email: 'veronicamattaboni@gmail.com'
      },
      submittable: {
        personal: {
          email: 'veronicamattaboni@gmail.com',
          id: 'a901bdd7-8556-423e-b324-a6a46b3ac222',
          application: 8197486
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2017-07-17T17:58:23+00:00'
  },
  {
    name: {
      givenName: 'Melissa',
      familyName: 'McCann',
      fullName: 'Melissa McCann',
      displayName: 'melissam'
    },
    email: 'mccannmelissa12@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/fe698a04bcef724e99b4f1157b3fb531.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0000-48.png',
    services: {
      slack: {
        id: 'U4KDX2STE',
        email: 'mccannmelissa12@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U4KDX2STE',
        email: 'mccannmelissa12@gmail.com'
      },
      submittable: {
        personal: {
          email: 'mccannmelissa12@gmail.com',
          id: 'ee8756f0-aa6e-45b7-97c5-550e01fa587f',
          application: 7433738
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2017-03-09T14:17:49+00:00'
  },
  {
    name: {
      givenName: 'kyler',
      familyName: 'mccormick',
      fullName: 'kyler mccormick',
      displayName: 'kyler mccormick'
    },
    email: 'mcckyl11105a@mischools.org',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'mcckyl11105a@mischools.org',
          id: 'd1f73f39-afde-4327-b05a-5f363bbfd6ef',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-12-20T10:28:13+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Katharine',
      familyName: 'McDermott',
      fullName: 'Katharine McDermott',
      displayName: 'Katharine McDermott'
    },
    email: 'katharine@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '113124758097134403212',
        emails: [
          {
            address: 'ktcurtin@eircom.net',
            type: 'other'
          },
          {
            address: 'katharine@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UDV9HBP4G',
        email: 'katharine@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'katharine@egjpress.org',
          id: 'a2d98ff4-b286-4aff-8727-61a5125b686b'
        },
        personal: {
          email: 'ktcurtin@eircom.net',
          id: '2485f20a-1fee-4ede-916f-e4ab9a4a77bf',
          application: 11439260
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UDV9HBP4G',
        email: 'katharine@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: 'a2d98ff4-b286-4aff-8727-61a5125b686b',
        email: 'katharine@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-11-15T08:56:30Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Katharine',
    appliedDate: '2018-10-24T02:48:30+00:00'
  },
  {
    name: {
      givenName: 'Lucy',
      familyName: 'Mcdowall',
      fullName: 'Lucy Mcdowall',
      displayName: 'lucy'
    },
    email: 'lj.mcdowallauthor@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/1fc078368567e439d2d767dea890fc43.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0016-48.png',
    services: {
      slack: {
        id: 'U037RRNAK',
        email: 'lj.mcdowallauthor@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U037RRNAK',
        email: 'lj.mcdowallauthor@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Megan ',
      familyName: 'Mealor',
      fullName: 'Megan Mealor',
      displayName: 'Megan Mealor'
    },
    email: 'megan@egjpress.org',
    status: 'Disabled',
    photoUrl: null,
    dataSources: {
      google: {
        id: '106847223022214132965',
        emails: [
          {
            address: 'megan@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U9UEJKY1F',
        email: 'megan@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U9UEJKY1F',
        email: 'megan@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-03-23T12:52:14Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'megan'
  },
  {
    name: {
      givenName: 'Megan D',
      familyName: 'Mealor',
      fullName: 'Megan D Mealor',
      displayName: 'Megan Denese Mealor'
    },
    email: 'fl_gypsy1985@aol.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'fl_gypsy1985@aol.com',
          id: '1b05522a-ff56-43d0-a352-5ad8aabd7e76',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-01-30T15:09:44+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Alex',
      familyName: 'Melville',
      fullName: 'Alex Melville',
      displayName: 'Alex'
    },
    email: 'alexandramelville8@gmail.com',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2019-04-17/611185218544_4bbc6f47054ec1c190ce_original.jpg',
    services: {
      slack: {
        id: 'U6H4880RW',
        email: 'alexandramelville8@gmail.com',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '0c4c915d-5ad8-46d9-9d9b-b210b9b9c70f',
        email: 'alexandramelville8@gmail.com',
        enabled: true
      }
    },
    dataSources: {
      slack: {
        id: 'U6H4880RW',
        email: 'alexandramelville8@gmail.com'
      },
      submittable: {
        staff: {
          email: 'alexandramelville8@gmail.com',
          id: '0c4c915d-5ad8-46d9-9d9b-b210b9b9c70f'
        },
        personal: {
          email: 'alexandramelville8@gmail.com',
          id: '0c4c915d-5ad8-46d9-9d9b-b210b9b9c70f',
          application: 8178998
        }
      }
    },
    isDeleted: false,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    appliedDate: '2017-07-14T21:01:02+00:00'
  },
  {
    name: {
      givenName: 'Staff',
      familyName: 'Member',
      fullName: 'Staff Member',
      displayName: 'staff-member'
    },
    email: 'staff-member@egjarts.org',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/48cafbf90337e37e638072d4bd55299d.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0001-48.png',
    services: {
      slack: {
        id: 'U61EB5QJY',
        email: 'staff-member@egjarts.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U61EB5QJY',
        email: 'staff-member@egjarts.org'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Jonah',
      familyName: 'Meyer',
      fullName: 'Jonah Meyer',
      displayName: 'Jonah Meyer'
    },
    email: 'poetjonah@yahoo.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'poetjonah@yahoo.com',
          id: '82918b00-4397-409e-83b1-b0825d87fe4d',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-10-16T16:59:13+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Brenna',
      familyName: 'Miller',
      fullName: 'Brenna Miller',
      displayName: 'Brenna Miller'
    },
    email: 'brenna@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-07-03/391761301873_299f18e2b4c0132079cd_original.jpg',
    dataSources: {
      google: {
        id: '101027584965523694990',
        emails: [
          {
            address: 'BrennaMiller20@gmail.com',
            type: 'other'
          },
          {
            address: 'brenna@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl:
          'https://www.google.com/s2/photos/private/AIbEiAIAAABDCI7LyfTO4q2hDiILdmNhcmRfcGhvdG8qKGY5ODhiNjk3OTU4NGQ5N2M2NWMwMzA3OTQ2NzQ5MzY3M2RiMGJlNmQwAdTsgWp4WPvFOue3hVthj9fzEy_R'
      },
      slack: {
        id: 'UBK755MM5',
        email: 'brenna@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'brenna@egjpress.org',
          id: '1632331a-f1c2-4986-b7e5-58686c8e8568'
        },
        personal: {
          email: 'brennamiller20@gmail.com',
          id: '2717d320-d43b-4ea7-b622-a9aa365e55bb',
          application: 10594366
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UBK755MM5',
        email: 'brenna@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '1632331a-f1c2-4986-b7e5-58686c8e8568',
        email: 'brenna@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-07-03T12:29:35Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Brenna',
    appliedDate: '2018-06-20T22:15:50+00:00'
  },
  {
    name: {
      givenName: 'Jakob',
      familyName: 'Mills',
      fullName: 'Jakob Mills',
      displayName: 'millsjakob'
    },
    email: 'millsjakob33@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/1a5cdac65b45b4d10132d4a45dc264b3.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0016-48.png',
    services: {
      slack: {
        id: 'U16AAP7U3',
        email: 'millsjakob33@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U16AAP7U3',
        email: 'millsjakob33@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Patricia',
      familyName: 'Miranda',
      fullName: 'Patricia Miranda',
      displayName: 'tricia-louise'
    },
    email: 'patricia.louise.miranda14@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/eb6c87c056a028d9e45253ec8a0c8f8a.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0013-48.png',
    services: {
      slack: {
        id: 'U0T10L5SA',
        email: 'patricia.louise.miranda14@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0T10L5SA',
        email: 'patricia.louise.miranda14@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Riya',
      familyName: 'Mirchandaney',
      fullName: 'Riya Mirchandaney',
      displayName: 'riya'
    },
    email: 'riya.mirchandaney@menloschool.org',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/919585dc20dfb21a24de5451d255a84d.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0025-48.png',
    services: {
      slack: {
        id: 'U050RSQQ2',
        email: 'riya.mirchandaney@menloschool.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U050RSQQ2',
        email: 'riya.mirchandaney@menloschool.org'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Chiya',
      familyName: 'Mittal',
      fullName: 'Chiya Mittal',
      displayName: 'Chiya Mittal'
    },
    email: 'chiya@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-05-14/362872620256_873d25613a1f406ed85d_original.jpg',
    dataSources: {
      google: {
        id: '103691274537221252691',
        emails: [
          {
            address: 'chiyamittal10@gmail.com',
            type: 'other'
          },
          {
            address: 'chiya@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UAQ4YCAES',
        email: 'chiya@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'chiya@egjpress.org',
          id: 'ed60468b-c15b-4d12-aaba-90c2894f313f'
        },
        personal: {
          email: 'chiyamittal10@gmail.com',
          id: 'c43d4dec-a188-4ad3-b5aa-712703a40ace',
          application: 9549341
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UAQ4YCAES',
        email: 'chiya@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: 'ed60468b-c15b-4d12-aaba-90c2894f313f',
        email: 'chiya@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-05-14T11:56:43Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Chiya',
    appliedDate: '2018-02-02T07:41:20+00:00'
  },
  {
    name: {
      givenName: 'Ashreya',
      familyName: 'Mohan',
      fullName: 'Ashreya Mohan',
      displayName: 'Ashreya Mohan'
    },
    email: 'ashreya@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '117092604129115270993',
        emails: [
          {
            address: 'ashreyamohan71@gmail.com',
            type: 'other'
          },
          {
            address: 'ashreya@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UJFKYLTFY',
        email: 'ashreya@egjpress.org'
      },
      submittable: {
        personal: {
          email: 'ashreyamohan71@gmail.com',
          id: 'd4c51841-addb-487c-9b0c-f4dcc039f0f7',
          application: 12626860
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UJFKYLTFY',
        email: 'ashreya@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2019-05-03T11:42:25Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'Ashreya',
    appliedDate: '2019-03-15T12:21:04+00:00'
  },
  {
    name: {
      givenName: 'Mirela ',
      familyName: 'Moldovan',
      fullName: 'Mirela Moldovan',
      displayName: 'Mirela Moldovan'
    },
    email: 'mirela@egjarts.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-06-01/375415176647_0b4cf766ac64a95d46e6_original.jpg',
    dataSources: {
      google: {
        id: '117193218968373051120',
        emails: [
          {
            address: 'mirela7moldovan@gmail.com',
            type: 'other'
          },
          {
            address: 'mirela@egjarts.org',
            primary: true
          },
          {
            address: 'mirela@egjpress.org'
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U97J535L6',
        email: 'mirela@egjarts.org'
      },
      submittable: {
        staff: {
          email: 'mirela@egjpress.org',
          id: 'e71f1315-0ceb-40c1-8f0c-95fec2bb5e90'
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U97J535L6',
        email: 'mirela@egjarts.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: 'e71f1315-0ceb-40c1-8f0c-95fec2bb5e90',
        email: 'mirela@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-03-13T15:55:13Z',
    orgRoles: {
      foundation: [
        {
          name: 'Admin',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Mirela'
  },
  {
    name: {
      givenName: 'Rae C',
      familyName: 'Monroe',
      fullName: 'Rae C Monroe',
      displayName: 'Rae Monroe'
    },
    email: 'raecmonroe@outlook.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'raecmonroe@outlook.com',
          id: 'f3326373-de78-4ccd-ac01-1a583800a5ac',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2019-05-12T03:28:27+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Onita',
      familyName: 'Morgan Edwards',
      fullName: 'Onita Morgan Edwards',
      displayName: 'Onita Morgan Edwards'
    },
    email: 'onita@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-07-05/393639302309_bb7afc5fdd88328f83ef_original.jpg',
    dataSources: {
      google: {
        id: '114882181214429906194',
        emails: [
          {
            address: 'omorgane@ashland.edu',
            type: 'other'
          },
          {
            address: 'onita@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UBJHKH4SH',
        email: 'onita@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UBJHKH4SH',
        email: 'onita@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-07-03T18:24:58Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'onita'
  },
  {
    name: {
      givenName: 'Joe',
      familyName: 'Morrison',
      fullName: 'Joe Morrison',
      displayName: 'Joe Morrison'
    },
    email: 'joe@egjarts.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '105963001136307598237',
        emails: [
          {
            address: 'Jomorr90@gmail.com',
            type: 'work'
          },
          {
            address: 'joe@egjarts.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UR2R26SAH',
        email: 'joe@egjarts.org'
      },
      submittable: {
        staff: {
          email: 'joe@egjarts.org',
          id: '06dff32f-fbe8-479b-be9b-564f4a911a3c'
        },
        personal: {
          email: 'jomorr90@gmail.com',
          id: 'd64b4ee3-b54e-42b4-b5fb-f9d65233e6fa',
          application: 13335735
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UR2R26SAH',
        email: 'joe@egjarts.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '06dff32f-fbe8-479b-be9b-564f4a911a3c',
        email: 'joe@egjarts.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2019-11-28T13:10:47Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'joe',
    appliedDate: '2019-06-15T12:32:20+00:00'
  },
  {
    name: {
      givenName: 'Sarah',
      familyName: 'Morrow',
      fullName: 'Sarah Morrow',
      displayName: 'sarahcmorrow'
    },
    email: 'sarahcmorrow45@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/72f8823ca78cac91a8c5f8df6171e8b2.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0001-48.png',
    services: {
      slack: {
        id: 'U2Y9YSPJM',
        email: 'sarahcmorrow45@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U2Y9YSPJM',
        email: 'sarahcmorrow45@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Andrea',
      familyName: 'Mosqueda',
      fullName: 'Andrea Mosqueda',
      displayName: 'a.r.mosq99'
    },
    email: 'andrea.mosqueda@yale.edu',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/dd323ea355cf0e00fc16dff15ca3bcf0.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0006-48.png',
    services: {
      slack: {
        id: 'U0S5JAP9C',
        email: 'andrea.mosqueda@yale.edu',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0S5JAP9C',
        email: 'andrea.mosqueda@yale.edu'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Jim',
      familyName: 'Musgrave',
      fullName: 'Jim Musgrave',
      displayName: 'jimmusgrave'
    },
    email: 'jimmusgrave@cox.net',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/d1447a9dcf095a3b4c0cd9a93b1dee2d.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0014-48.png',
    services: {
      slack: {
        id: 'U037DJ00P',
        email: 'jimmusgrave@cox.net',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U037DJ00P',
        email: 'jimmusgrave@cox.net'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Kyle',
      familyName: 'Mustain',
      fullName: 'Kyle Mustain',
      displayName: 'kybob'
    },
    email: 'kyle.r.mustain@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2015-01-20/3461239077_02fc866f66b90b53d125_original.jpg',
    services: {
      slack: {
        id: 'U03DM1HKU',
        email: 'kyle.r.mustain@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U03DM1HKU',
        email: 'kyle.r.mustain@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Abby',
      familyName: 'Muth',
      fullName: 'Abby Muth',
      displayName: 'Abby  Muth'
    },
    email: 'abigail.n@hotmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'abigail.n@hotmail.com',
          id: 'fe5902da-791b-46f9-86e1-7ed68c71f6cd',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-10-29T20:57:10+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Abigail',
      familyName: 'Muth',
      fullName: 'Abigail Muth',
      displayName: 'Abigail Muth'
    },
    email: 'abigail@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '106822783235481754716',
        emails: [
          {
            address: 'abigailmuth7@gmail.com',
            type: 'other'
          },
          {
            address: 'abigail@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UE8J8BSMB',
        email: 'abigail@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UE8J8BSMB',
        email: 'abigail@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-11-20T18:09:02Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'Abigail'
  },
  {
    name: {
      givenName: 'Courtney',
      familyName: 'Myers',
      fullName: 'Courtney Myers',
      displayName: 'cdmoses6'
    },
    email: 'cdmyers6@mail.fhsu.edu',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/5c29fa4e683b2604ac57a1d78ddb0728.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0011-48.png',
    services: {
      slack: {
        id: 'U039W3QCH',
        email: 'cdmyers6@mail.fhsu.edu',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U039W3QCH',
        email: 'cdmyers6@mail.fhsu.edu'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Tatenda',
      familyName: 'Mzondiwa',
      fullName: 'Tatenda Mzondiwa',
      displayName: 'tate125'
    },
    email: 'tatendamzondiwa@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/1cea97fc7d6629a4a7f404f822614283.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0004-48.png',
    services: {
      slack: {
        id: 'U1B17K42F',
        email: 'tatendamzondiwa@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U1B17K42F',
        email: 'tatendamzondiwa@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Ram',
      familyName: 'N',
      fullName: 'Ram N',
      displayName: 'Ram N'
    },
    email: 'rampoem@yahoo.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'rampoem@yahoo.com',
          id: '7dfea0ec-1307-4333-9dff-41d897cb7ebc',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-06-30T10:43:00+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Mia Nelson',
      familyName: 'Nelson',
      fullName: 'Mia Nelson',
      displayName: 'mmianelson'
    },
    email: 'mmianelson@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/14825271ce4f2a7ee8f2ea5073215a15.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0024-48.png',
    services: {
      slack: {
        id: 'U074KP9DZ',
        email: 'mmianelson@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U074KP9DZ',
        email: 'mmianelson@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Lisa Christina ',
      familyName: 'Nemec',
      fullName: 'Lisa Christina Nemec',
      displayName: 'Lisa Christina Nemec'
    },
    email: 'lisac@egjpress.org',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2018-05-15/365050479815_30aaea7fdcb902d4b201_original.jpg',
    dataSources: {
      google: {
        id: '101528985636719038352',
        emails: [
          {
            address: 'lisac@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl:
          'https://www.google.com/s2/photos/private/AIbEiAIAAABDCJCfwPreioOcFSILdmNhcmRfcGhvdG8qKDYyYTNhZGFiN2FjM2U5ODNmZDVlMGIxYjMxYWY1MjkxOTI2ZWVjZmMwAaTA7k9NCRKIRn8rqYtsSaTfbedQ'
      },
      slack: {
        id: 'UAQ3GUHCM',
        email: 'lisac@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UAQ3GUHCM',
        email: 'lisac@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-05-15T10:53:45Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'lisac'
  },
  {
    name: {
      givenName: 'Mai',
      familyName: 'Nguyen',
      fullName: 'Mai Nguyen',
      displayName: 'Mai Nguyen'
    },
    email: 'chimai.nguyen2001@gmail.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'chimai.nguyen2001@gmail.com',
          id: '7578c6fe-a26c-4c64-9478-261e225d735c',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-09-06T05:32:16+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Mai',
      familyName: 'Nguyen',
      fullName: 'Mai Nguyen',
      displayName: 'Mai Nguyen'
    },
    email: 'chimai.nguyen2001@gmail.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'chimai.nguyen2001@gmail.com',
          id: '7578c6fe-a26c-4c64-9478-261e225d735c',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-09-06T03:01:57+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Ava R',
      familyName: 'Norman',
      fullName: 'Ava R Norman',
      displayName: 'Ava Norman'
    },
    email: 'writtenandillustratedbyme@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'writtenandillustratedbyme@gmail.com',
          id: '992a0da0-b80a-47e6-bc36-b9de47226f00',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-06-15T15:22:21+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Kathleen',
      familyName: "O'Neil",
      fullName: "Kathleen O'Neil",
      displayName: "Kathleen O'Neil"
    },
    email: 'kathleen@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '115272137720966917043',
        emails: [
          {
            address: 'klg.oneil@gmail.com',
            type: 'other'
          },
          {
            address: 'kathleen@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UD19EDKC2',
        email: 'kathleen@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'kathleen@egjpress.org',
          id: '2b44a8b9-6cce-4430-93a3-4bfb8a044fa2'
        },
        personal: {
          email: 'klg.oneil@gmail.com',
          id: '096778ef-a124-4043-a686-c0f743e84429',
          application: 11161321
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UD19EDKC2',
        email: 'kathleen@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '2b44a8b9-6cce-4430-93a3-4bfb8a044fa2',
        email: 'kathleen@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-09-26T10:23:30Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Kathleen',
    appliedDate: '2018-09-19T10:38:02+00:00'
  },
  {
    name: {
      givenName: 'chiamaka',
      familyName: 'okonkwo',
      fullName: 'chiamaka okonkwo',
      displayName: 'Chiamaka Okonkwo'
    },
    email: 'toniaokon100@gmail.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'toniaokon100@gmail.com',
          id: 'f03df4b8-2067-411e-bdc1-187b95ad69c8',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-06-28T20:51:53+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Jillian',
      familyName: 'Oliver',
      fullName: 'Jillian Oliver',
      displayName: 'Jillian Oliver'
    },
    email: 'jillian@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '112046692270813260094',
        emails: [
          {
            address: 'Jillian3689@gmail.com',
            type: 'other'
          },
          {
            address: 'jillian@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UJ22NN8KC',
        email: 'jillian@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'jillian@egjpress.org',
          id: 'df318ae8-57ec-451c-8e5c-e8525903a348'
        },
        personal: {
          email: 'jillian3689@gmail.com',
          id: '795ed861-7697-4eea-ad82-3f3460acd3cf',
          application: 12571711
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UJ22NN8KC',
        email: 'jillian@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: 'df318ae8-57ec-451c-8e5c-e8525903a348',
        email: 'jillian@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2019-05-03T11:40:12Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Jillian',
    appliedDate: '2019-03-08T18:48:34+00:00'
  },
  {
    name: {
      givenName: 'Grace',
      familyName: 'Oluseyi',
      fullName: 'Grace Oluseyi',
      displayName: 'goluseyi'
    },
    email: 'oluseyi.gr@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/564392f7e4d73468fd450e44bf3f0b06.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0016-48.png',
    services: {
      slack: {
        id: 'U037K6CFK',
        email: 'oluseyi.gr@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U037K6CFK',
        email: 'oluseyi.gr@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: ' Rebecca',
      familyName: 'Orner',
      fullName: 'Rebecca Orner',
      displayName: 'Rebecca Orner'
    },
    email: 'rebecca@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-05-23/369600135223_9d43040bd1e2fef818fd_original.jpg',
    dataSources: {
      google: {
        id: '118429258593048758725',
        emails: [
          {
            address: 'rorn2093@gmail.com',
            type: 'other'
          },
          {
            address: 'rebecca@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UAT1K4084',
        email: 'rebecca@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'rebecca@egjpress.org',
          id: 'a8aea18a-ab6f-445e-adcf-ff5f7e4f543b'
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UAT1K4084',
        email: 'rebecca@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: 'a8aea18a-ab6f-445e-adcf-ff5f7e4f543b',
        email: 'rebecca@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-05-16T14:06:15Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Becky'
  },
  {
    name: {
      givenName: 'Joaquin',
      familyName: 'Pacheco',
      fullName: 'Joaquin Pacheco',
      displayName: 'joaquinp'
    },
    email: 'japb88@yahoo.com.mx',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2018-04-28/354585723440_23c745c60987d0a64566_original.png',
    services: {
      slack: {
        id: 'U69JTH8FP',
        email: 'japb88@yahoo.com.mx',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U69JTH8FP',
        email: 'japb88@yahoo.com.mx'
      },
      submittable: {
        personal: {
          email: 'japb88@yahoo.com.mx',
          id: '4f0f6dde-b661-4805-8e20-d6faec1cc08e',
          application: 8078448
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2017-06-24T10:54:16+00:00'
  },
  {
    name: {
      givenName: 'Lorna',
      familyName: 'Partington Walsh',
      fullName: 'Lorna Partington Walsh',
      displayName: 'lorna'
    },
    email: 'lorna@ideal-type.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/cc5a642070146da5349fc60c301f273a.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0013-48.png',
    services: {
      slack: {
        id: 'U26EH3EDN',
        email: 'lorna@ideal-type.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U26EH3EDN',
        email: 'lorna@ideal-type.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Isabella',
      familyName: 'Penna-Ward',
      fullName: 'Isabella Penna-Ward',
      displayName: 'isabella'
    },
    email: 'isabella.p.w@outlook.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/2bc4d3ef9c78483779c1600bfde94ad4.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0019-48.png',
    services: {
      slack: {
        id: 'U3RBA8F8T',
        email: 'isabella.p.w@outlook.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U3RBA8F8T',
        email: 'isabella.p.w@outlook.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Dominic L',
      familyName: 'Peters',
      fullName: 'Dominic L Peters',
      displayName: 'Dominic Peters'
    },
    email: 'nikpeters@icloud.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'nikpeters@icloud.com',
          id: 'd3f7b2cf-b4e2-4161-8841-7262fe514b98',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-07-12T18:48:18+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Alex',
      familyName: 'Phuong',
      fullName: 'Alex Phuong',
      displayName: 'Alex'
    },
    email: 'alexandyphuong@yahoo.com',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2017-11-19/274888404181_bc51f48af799a9ece2b7_original.jpg',
    services: {
      slack: {
        id: 'U5NR1PKU4',
        email: 'alexandyphuong@yahoo.com',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '4c4090ed-97b5-4203-8314-bc165e120a28',
        email: 'alexandyphuong@yahoo.com',
        enabled: true
      }
    },
    dataSources: {
      slack: {
        id: 'U5NR1PKU4',
        email: 'alexandyphuong@yahoo.com'
      },
      submittable: {
        staff: {
          email: 'alexandyphuong@yahoo.com',
          id: '4c4090ed-97b5-4203-8314-bc165e120a28'
        },
        personal: {
          email: 'alexandyphuong@yahoo.com',
          id: '4c4090ed-97b5-4203-8314-bc165e120a28',
          application: 7916636
        }
      }
    },
    isDeleted: false,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    appliedDate: '2017-05-23T15:44:35+00:00'
  },
  {
    name: {
      givenName: 'Julia',
      familyName: 'Pope',
      fullName: 'Julia Pope',
      displayName: 'duplicate-jpope'
    },
    email: 'jpope@sparkanthology.org',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/a7eb965ee06dcfe81ebc025a7d265aaf.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0022-48.png',
    services: {
      slack: {
        id: 'U8R4DV4P5',
        email: 'jpope@sparkanthology.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U8R4DV4P5',
        email: 'jpope@sparkanthology.org'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Julia',
      familyName: 'Pope',
      fullName: 'Julia Pope',
      displayName: 'Julia Pope'
    },
    email: 'jpope@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-07-07/395826969046_cf476c434f7e51e40066_original.jpg',
    dataSources: {
      google: {
        id: '116192611077065433506',
        emails: [
          {
            address: 'ijuliap@rocketmail.com',
            type: 'other'
          },
          {
            address: 'jpope@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U2ERC5NQ0',
        email: 'jpope@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'jpope@egjpress.org',
          id: '11223515-6107-4a40-bce0-afbbd741444f'
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U2ERC5NQ0',
        email: 'jpope@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '11223515-6107-4a40-bce0-afbbd741444f',
        email: 'jpope@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-01-11T07:32:40Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Julia'
  },
  {
    name: {
      givenName: 'Ioana',
      familyName: 'Popescu',
      fullName: 'Ioana Popescu',
      displayName: 'Ioana Popescu'
    },
    email: 'ioana@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-12-10/500398448034_aff21ae42e80173e1c1d_original.jpg',
    dataSources: {
      google: {
        id: '109017526045531069834',
        emails: [
          {
            address: 'popescu.ioana.alex@gmail.com',
            type: 'other'
          },
          {
            address: 'ioana@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UEPNSEGKC',
        email: 'ioana@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'ioana@egjpress.org',
          id: '8cc8c445-434f-4b01-84c2-28c1ace2102a'
        },
        personal: {
          email: 'popescu.ioana.alex@gmail.com',
          id: 'df8b6935-981c-41bb-beeb-6bd37eb45e35',
          application: 11540238
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UEPNSEGKC',
        email: 'ioana@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '8cc8c445-434f-4b01-84c2-28c1ace2102a',
        email: 'ioana@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-12-10T12:46:25Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Ioana',
    appliedDate: '2018-11-05T11:21:50+00:00'
  },
  {
    name: {
      givenName: 'Cherry',
      familyName: 'Potts',
      fullName: 'Cherry Potts',
      displayName: 'cherrypotts'
    },
    email: 'cherry@arachnepress.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/b3d59d2508b43ef5b61ec83008dfdcf9.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0002-48.png',
    services: {
      slack: {
        id: 'U0372LQ6C',
        email: 'cherry@arachnepress.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0372LQ6C',
        email: 'cherry@arachnepress.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Rojina',
      familyName: 'Pradhan',
      fullName: 'Rojina Pradhan',
      displayName: 'Rojina Pradhan'
    },
    email: 'rojina@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '115892832135050290536',
        emails: [
          {
            address: 'roselark7@gmail.com',
            type: 'other'
          },
          {
            address: 'rojina@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U9WKH02BA',
        email: 'rojina@egjpress.org'
      },
      submittable: {
        personal: {
          email: 'roselark7@gmail.com',
          id: '2d2b436a-a476-457c-9dae-1a9889698b79',
          application: 7422734
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U9WKH02BA',
        email: 'rojina@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-03-28T08:26:33Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'rojina',
    appliedDate: '2017-03-07T20:44:18+00:00'
  },
  {
    name: {
      givenName: 'Jilly',
      familyName: 'Pretzel',
      fullName: 'Jilly Pretzel',
      displayName: 'jillianpretzel'
    },
    email: 'jillianpretzel@yahoo.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2017-06-28/205131612226_6c5315d3adcf1b4c65f9_original.png',
    services: {
      slack: {
        id: 'U61RU8ZFH',
        email: 'jillianpretzel@yahoo.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U61RU8ZFH',
        email: 'jillianpretzel@yahoo.com'
      },
      submittable: {
        personal: {
          email: 'jillianpretzel@yahoo.com',
          id: '751dedbe-ec33-4f78-8641-f0f807f918b0',
          application: 8075390
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2017-06-23T13:29:13+00:00'
  },
  {
    name: {
      givenName: null,
      familyName: 'Publication',
      fullName: '— Pending Publication',
      displayName: '— Pending Publication'
    },
    email: 'pending-publication@sparkanthology.org',
    status: 'Active',
    photoUrl: null,
    services: {
      submittable: {
        id: '26febda6-0a9c-4bdd-8a55-9a548f9e29d9',
        email: 'pending-publication@sparkanthology.org',
        enabled: true
      }
    },
    dataSources: {
      submittable: {
        staff: {
          email: 'pending-publication@sparkanthology.org',
          id: '26febda6-0a9c-4bdd-8a55-9a548f9e29d9'
        }
      }
    },
    isDeleted: false,
    orgRoles: {
      press: [
        {
          name: 'Guest Reader',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: null,
      familyName: 'Published',
      fullName: '— Published',
      displayName: '— Published'
    },
    email: 'published@egjpress.org',
    status: 'Active',
    photoUrl: null,
    services: {
      submittable: {
        id: '68647c0c-43d2-49e8-b434-db027da44201',
        email: 'published@egjpress.org',
        enabled: true
      }
    },
    dataSources: {
      submittable: {
        staff: {
          email: 'published@egjpress.org',
          id: '68647c0c-43d2-49e8-b434-db027da44201'
        }
      }
    },
    isDeleted: false,
    orgRoles: {
      press: [
        {
          name: 'Guest Reader',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Jeremy',
      familyName: 'Pugh',
      fullName: 'Jeremy Pugh',
      displayName: 'Jeremy Pugh'
    },
    email: 'jeremy@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2019-05-03/625514574180_4a14d5bd18e7423ee7de_original.jpg',
    dataSources: {
      google: {
        id: '110922255897157742331',
        emails: [
          {
            address: 'pugh.jeremy@gmail.com',
            type: 'other'
          },
          {
            address: 'jeremy@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UD13PR4NQ',
        email: 'jeremy@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'jeremy@egjpress.org',
          id: 'be4c6347-e598-434c-947f-caadad0cc303'
        },
        personal: {
          email: 'pugh.jeremy@gmail.com',
          id: '07deca64-47e0-4018-8bd4-6321ec175aa7',
          application: 10760252
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UD13PR4NQ',
        email: 'jeremy@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: 'be4c6347-e598-434c-947f-caadad0cc303',
        email: 'jeremy@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-09-26T10:12:38Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Jeremy',
    appliedDate: '2018-07-18T20:40:48+00:00'
  },
  {
    name: {
      givenName: 'safia a',
      familyName: 'qureshi',
      fullName: 'safia a qureshi',
      displayName: 'safia qureshi'
    },
    email: 'safiaisqureshi@gmail.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'safiaisqureshi@gmail.com',
          id: '4d503bcc-a27b-4312-b529-2d2789990832',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-08-04T11:04:48+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Philippa',
      familyName: 'Rae',
      fullName: 'Philippa Rae',
      displayName: 'Philippa Rae'
    },
    email: 'philippa@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '109399194784938034565',
        emails: [
          {
            address: 'philippastales@hotmail.co.uk',
            type: 'other'
          },
          {
            address: 'philippa@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UJCUY79EY',
        email: 'philippa@egjpress.org'
      },
      submittable: {
        personal: {
          email: 'philippastales@hotmail.co.uk',
          id: 'be226eba-fa8c-46cc-8978-183dbd13e6c4',
          application: 12766778
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UJCUY79EY',
        email: 'philippa@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2019-05-03T11:53:07Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'philippa',
    appliedDate: '2019-04-01T06:28:30+00:00'
  },
  {
    name: {
      givenName: 'Rushda',
      familyName: 'Rafeek',
      fullName: 'Rushda Rafeek',
      displayName: 'rushda'
    },
    email: 'rushdasays@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2016-09-04/76146584130_d2de5770bc9fc1d162cc_original.jpg',
    services: {
      slack: {
        id: 'U2843473R',
        email: 'rushdasays@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U2843473R',
        email: 'rushdasays@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Ujwal',
      familyName: 'Rajaputhra',
      fullName: 'Ujwal Rajaputhra',
      displayName: 'ujwal'
    },
    email: 'ujwalwrite@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/795c34af0ff9a16eb305cb970d8cc0b9.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0006-48.png',
    services: {
      slack: {
        id: 'U1NBZTE8H',
        email: 'ujwalwrite@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U1NBZTE8H',
        email: 'ujwalwrite@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Shivranjana S',
      familyName: 'Rathore',
      fullName: 'Shivranjana S Rathore',
      displayName: 'Shivranjana Rathore'
    },
    email: 'shivranjana.r@gmail.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'shivranjana.r@gmail.com',
          id: '6691cf42-ac21-49dc-a634-30c9ef762c24',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-07-20T07:39:57+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Brian',
      familyName: 'Reeves',
      fullName: 'Brian Reeves',
      displayName: 'brianreeves'
    },
    email: 'brianreeves@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/3f7949ecce61389280c274e43931ebfa.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0022-48.png',
    services: {
      slack: {
        id: 'U136M2U07',
        email: 'brianreeves@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U136M2U07',
        email: 'brianreeves@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Wyeth',
      familyName: 'Renwick',
      fullName: 'Wyeth Renwick',
      displayName: 'Wyeth Renwick'
    },
    email: 'wyeth@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '105244903919824524955',
        emails: [
          {
            address: 'wzrenwick@icloud.com',
            type: 'other'
          },
          {
            address: 'wyeth@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UJCUZ7VUL',
        email: 'wyeth@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'wyeth@egjpress.org',
          id: '77381163-c831-494c-b61e-498281e0944f'
        },
        personal: {
          email: 'wzrenwick@icloud.com',
          id: 'b889baae-7b55-4be3-95fa-6ae1bb366af7',
          application: 12793294
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UJCUZ7VUL',
        email: 'wyeth@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '77381163-c831-494c-b61e-498281e0944f',
        email: 'wyeth@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2019-05-03T11:54:53Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'wyeth',
    appliedDate: '2019-04-03T17:24:48+00:00'
  },
  {
    name: {
      givenName: null,
      familyName: 'Response',
      fullName: '— Pending  Response',
      displayName: '— Pending  Response'
    },
    email: 'pending-response@sparkanthology.org',
    status: 'Active',
    photoUrl: null,
    services: {
      submittable: {
        id: 'ddbada6d-b7ad-4053-8aec-a3e3cd7ae36a',
        email: 'pending-response@sparkanthology.org',
        enabled: true
      }
    },
    dataSources: {
      submittable: {
        staff: {
          email: 'pending-response@sparkanthology.org',
          id: 'ddbada6d-b7ad-4053-8aec-a3e3cd7ae36a'
        }
      }
    },
    isDeleted: false,
    orgRoles: {
      press: [
        {
          name: 'Guest Reader',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Lisa ',
      familyName: 'Rhodes',
      fullName: 'Lisa Rhodes',
      displayName: 'Lisa Rhodes'
    },
    email: 'lisar@egjpress.org',
    status: 'Disabled',
    photoUrl: null,
    dataSources: {
      google: {
        id: '113459893675395462923',
        emails: [
          {
            address: 'lisar@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U9TKYQ8F2',
        email: 'lisar@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U9TKYQ8F2',
        email: 'lisar@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-03-22T21:00:38Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'lisar'
  },
  {
    name: {
      givenName: 'Lisa',
      familyName: 'Rhodes',
      fullName: 'Lisa Rhodes',
      displayName: 'Lisa Rhodes'
    },
    email: 'lisarhodes@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-04-02/339622138659_bcc18025c5126d4f2f11_original.png',
    dataSources: {
      google: {
        id: '101806918325505383793',
        emails: [
          {
            address: 'stemcellresearch77@gmail.com',
            type: 'other'
          },
          {
            address: 'lisarhodes@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U9ZDKECSG',
        email: 'lisarhodes@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'lisarhodes@egjpress.org',
          id: 'be141427-2f86-47df-b612-3fe4db8abda3'
        },
        personal: {
          email: 'stemcellresearch77@gmail.com',
          id: 'babe29ca-3c4b-4c31-8db5-c964831fdf05',
          application: 8333733
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U9ZDKECSG',
        email: 'lisarhodes@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: 'be141427-2f86-47df-b612-3fe4db8abda3',
        email: 'lisarhodes@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-04-02T13:44:47Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'lisarhodes',
    appliedDate: '2017-08-12T10:07:47+00:00'
  },
  {
    name: {
      givenName: 'Pamela G',
      familyName: 'Rigaux',
      fullName: 'Pamela G Rigaux',
      displayName: 'Pamela Rigaux'
    },
    email: 'prigaux@ix.netcom.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'prigaux@ix.netcom.com',
          id: '20626fd1-ce17-46bc-ae32-a484b6a4f29d',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-07-04T15:38:30+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Erwin L',
      familyName: 'Rimban',
      fullName: 'Erwin L Rimban',
      displayName: 'Erwin Rimban'
    },
    email: 'mentorpath@gmail.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'mentorpath@gmail.com',
          id: 'f0571952-2c96-42e9-b82c-a7afc6edfaa7',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-07-21T05:48:43+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Andrew',
      familyName: 'Roberts',
      fullName: 'Andrew Roberts',
      displayName: 'Andrew Roberts'
    },
    email: 'andrew@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2019-08-13/724749302180_dd2b2b36d177372174b7_original.jpg',
    dataSources: {
      google: {
        id: '100418393851911767443',
        emails: [
          {
            address: 'enkiduu@yahoo.com',
            type: 'other'
          },
          {
            address: 'andrew@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UJDF1935E',
        email: 'andrew@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UJDF1935E',
        email: 'andrew@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2019-05-03T11:26:37Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'Andy'
  },
  {
    name: {
      givenName: 'Helen',
      familyName: 'Robertson',
      fullName: 'Helen Robertson',
      displayName: 'Helen Robertson'
    },
    email: 'helen@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '104902424970592953729',
        emails: [
          {
            address: 'helen.o.robertson@gmail.com',
            type: 'other'
          },
          {
            address: 'helen@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UASE6MEEP',
        email: 'helen@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UASE6MEEP',
        email: 'helen@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-05-18T19:28:45Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'Helen'
  },
  {
    name: {
      givenName: 'Casey',
      familyName: 'Robin',
      fullName: 'Casey Robin',
      displayName: 'caseyrobin'
    },
    email: 'hello@caseyrobin.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/cf1e2e2ee90a90dadca89a22a53c2961.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0003-48.png',
    services: {
      slack: {
        id: 'U0MF5P5S6',
        email: 'hello@caseyrobin.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0MF5P5S6',
        email: 'hello@caseyrobin.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Melvatean ',
      familyName: 'Rocha',
      fullName: 'Melvatean Rocha',
      displayName: 'Melvatean Rocha'
    },
    email: 'melvatean@egjpress.org',
    status: 'Disabled',
    photoUrl: null,
    dataSources: {
      google: {
        id: '114045891654684393356',
        emails: [
          {
            address: 'melvatean@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UAXAF6N73',
        email: 'melvatean@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UAXAF6N73',
        email: 'melvatean@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-05-29T14:38:33Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'MR'
  },
  {
    name: {
      givenName: 'Edythe',
      familyName: 'Rodriguez',
      fullName: 'Edythe Rodriguez',
      displayName: 'Edythe Rodriguez'
    },
    email: 'edythe@egjarts.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '114690335887581129610',
        emails: [
          {
            address: 'tuf21673@temple.edu',
            type: 'work'
          },
          {
            address: 'edythe@egjarts.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UQYLP39HP',
        email: 'edythe@egjarts.org'
      },
      submittable: {
        staff: {
          email: 'edythe@egjarts.org',
          id: '3bb8e414-5669-46b4-8094-68898692d298'
        },
        personal: {
          email: 'tuf21673@temple.edu',
          id: 'c9a78483-6018-40c2-88c7-9b4cc51139d1',
          application: 13206518
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UQYLP39HP',
        email: 'edythe@egjarts.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '3bb8e414-5669-46b4-8094-68898692d298',
        email: 'edythe@egjarts.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2019-12-02T19:21:03Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'edythe',
    appliedDate: '2019-05-27T17:02:06+00:00'
  },
  {
    name: {
      givenName: 'martha l',
      familyName: 'roggli',
      fullName: 'martha l roggli',
      displayName: 'martha roggli'
    },
    email: 'mlroggli@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'mlroggli@gmail.com',
          id: '3da31bba-2c43-40a7-b104-b3ca7eb8f8cc',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-06-29T17:14:33+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'martha l',
      familyName: 'roggli',
      fullName: 'martha l roggli',
      displayName: 'martha roggli'
    },
    email: 'mlroggli@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'mlroggli@gmail.com',
          id: '3da31bba-2c43-40a7-b104-b3ca7eb8f8cc',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-06-29T15:13:46+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Martha',
      familyName: 'Roggli',
      fullName: 'Martha Roggli',
      displayName: 'Martha Roggli'
    },
    email: 'martha@egjpress.org',
    status: 'Disabled',
    photoUrl: null,
    dataSources: {
      google: {
        id: '110808781936781720656',
        emails: [
          {
            address: 'martha@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UD2ARDT5M',
        email: 'martha@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UD2ARDT5M',
        email: 'martha@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-09-26T10:15:12Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'martha'
  },
  {
    name: {
      givenName: 'Sarah',
      familyName: 'Ronau',
      fullName: 'Sarah Ronau',
      displayName: 'sarahronau'
    },
    email: 'sarah.j.ronau@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/26350648b0dc770b43ba2681cbf7e675.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0009-48.png',
    services: {
      slack: {
        id: 'U4HR76V9A',
        email: 'sarah.j.ronau@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U4HR76V9A',
        email: 'sarah.j.ronau@gmail.com'
      },
      submittable: {
        personal: {
          email: 'sarah.j.ronau@gmail.com',
          id: '057cb3cb-08a1-4dba-be7f-07657e198b59',
          application: 7421178
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2017-03-07T16:44:11+00:00'
  },
  {
    name: {
      givenName: 'Daniel',
      familyName: 'Rosen',
      fullName: 'Daniel Rosen',
      displayName: 'daniel'
    },
    email: 'rosen659@umn.edu',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/8d67a3b153d5a2744b13c83dd812410a.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0008-48.png',
    services: {
      slack: {
        id: 'U037KSY49',
        email: 'rosen659@umn.edu',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U037KSY49',
        email: 'rosen659@umn.edu'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Ann',
      familyName: 'Rosen',
      fullName: 'Ann Rosen',
      displayName: 'anntrosen'
    },
    email: 'anntrosen@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2015-12-08/16189684086_c718d5de59177833bd97_original.jpg',
    services: {
      slack: {
        id: 'U0EUPJSUV',
        email: 'anntrosen@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0EUPJSUV',
        email: 'anntrosen@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Tucker J',
      familyName: 'Ruyle',
      fullName: 'Tucker J Ruyle',
      displayName: 'Tucker Ruyle'
    },
    email: 'tuckerruyle@usd358.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'tuckerruyle@usd358.com',
          id: 'd3546504-11fc-4a1f-a59c-dc068c5557e8',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-02-07T15:22:12+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Sahaj',
      familyName: 'Sabharwal',
      fullName: 'Sahaj Sabharwal',
      displayName: 'Sahaj Sabharwal'
    },
    email: 'sahaj@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '110575590869060472090',
        emails: [
          {
            address: 'sahajsabharwal12345@gmail.com',
            type: 'other'
          },
          {
            address: 'sahaj@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UJFL3GPQE',
        email: 'sahaj@egjpress.org'
      },
      submittable: {
        personal: {
          email: 'sahajsabharwal12345@gmail.com',
          id: 'b02c224e-8d25-40ab-a4f2-676e89833d27',
          application: 12730213
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UJFL3GPQE',
        email: 'sahaj@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2019-05-03T11:50:02Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'sahaj',
    appliedDate: '2019-03-28T09:42:47+00:00'
  },
  {
    name: {
      givenName: 'Kyra',
      familyName: 'Saige',
      fullName: 'Kyra Saige',
      displayName: 'Kyra Saige'
    },
    email: 'kyra@egjpress.org',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2018-07-08/395909627543_9efb446db61c37ea1f1d_original.png',
    dataSources: {
      google: {
        id: '108754601069566979610',
        emails: [
          {
            address: 'kyra@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UBJ56SAQ2',
        email: 'kyra@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UBJ56SAQ2',
        email: 'kyra@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-07-03T12:32:24Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'Kyra Saige'
  },
  {
    name: {
      givenName: 'Danielle',
      familyName: 'Salt',
      fullName: 'Danielle Salt',
      displayName: 'Danielle Salt'
    },
    email: 'danielle@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '105636900386971636087',
        emails: [
          {
            address: 'danielles.salt@gmail.com',
            type: 'other'
          },
          {
            address: 'danielle@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U9SSN6TV1',
        email: 'danielle@egjpress.org'
      },
      submittable: {
        personal: {
          email: 'danielles.salt@gmail.com',
          id: 'b7560530-1d4a-493f-97cc-f657d5f0593c',
          application: 8512310
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U9SSN6TV1',
        email: 'danielle@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-03-20T15:42:57Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'danielle',
    appliedDate: '2017-09-12T05:19:26+00:00'
  },
  {
    name: {
      givenName: 'Sarah ',
      familyName: 'Saltiel',
      fullName: 'Sarah Saltiel',
      displayName: 'Sarah Saltiel'
    },
    email: 'sarah@egjpress.org',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2018-04-09/344159072277_a27c0f84eb5556bd628c_original.jpg',
    dataSources: {
      google: {
        id: '111057553429241279786',
        emails: [
          {
            address: 'sarah@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U9YU66EM7',
        email: 'sarah@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U9YU66EM7',
        email: 'sarah@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-03-23T11:53:18Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: ''
  },
  {
    name: {
      givenName: 'Sarah A',
      familyName: 'Saltiel',
      fullName: 'Sarah A Saltiel',
      displayName: 'Sarah Saltiel'
    },
    email: 'saltiel.saraha@yahoo.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'saltiel.saraha@yahoo.com',
          id: 'e2a17ba8-6b5d-41b4-902b-bdc0e152663f',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-11-08T11:41:34+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Sarah',
      familyName: 'Sarah',
      fullName: 'Sarah',
      displayName: 'sarah'
    },
    email: 'sarahnm91@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/6592ac38f137539171e6640d058e8431.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0019-48.png',
    services: {
      slack: {
        id: 'U08Q8HBRB',
        email: 'sarahnm91@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U08Q8HBRB',
        email: 'sarahnm91@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Sreyash',
      familyName: 'Sarkar',
      fullName: 'Sreyash Sarkar',
      displayName: 'sreyash.sarkar'
    },
    email: 'sajnephul@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2015-11-04/13837589157_54800c2d554a9ad8df5c_original.jpg',
    services: {
      slack: {
        id: 'U0DQNB727',
        email: 'sajnephul@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0DQNB727',
        email: 'sajnephul@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'tika',
      familyName: 'sathya',
      fullName: 'tika sathya',
      displayName: 'Tika Sathyanarayanan'
    },
    email: 'yuthika.sathya@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'yuthika.sathya@gmail.com',
          id: '89b0433c-22c8-4227-a61a-c929bbf09f35',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2019-12-07T10:27:13+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Delaney S',
      familyName: 'Saul',
      fullName: 'Delaney S Saul',
      displayName: 'Delaney S. Saul'
    },
    email: 'delaneyssaul@gmail.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'delaneyssaul@gmail.com',
          id: '28877c2a-b21a-48ea-bcbb-015d4526160b',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2019-05-03T18:39:30+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Angela',
      familyName: 'Savage',
      fullName: 'Angela Savage',
      displayName: 'angelasavage00'
    },
    email: 'angelasavage00@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/0814950fb39fb11e8e68448616f8dfe3.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0014-48.png',
    services: {
      slack: {
        id: 'U23D8F6MS',
        email: 'angelasavage00@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U23D8F6MS',
        email: 'angelasavage00@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Lauren M',
      familyName: 'Saxon',
      fullName: 'Lauren M Saxon',
      displayName: 'Lauren Saxon'
    },
    email: 'lauren.saxon@vanderbilt.edu',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'lauren.saxon@vanderbilt.edu',
          id: '0ca490a3-836b-4ee1-b1c8-beafdbd17c6e',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2019-08-20T11:09:23+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Claire',
      familyName: 'Sayers',
      fullName: 'Claire Sayers',
      displayName: 'Claire Sayers'
    },
    email: 'claire@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '109007724490716000870',
        emails: [
          {
            address: 'CESayers@aol.com',
            type: 'other'
          },
          {
            address: 'claire@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      submittable: {
        personal: {
          email: 'cesayers@aol.com',
          id: 'abf18549-bebc-47c8-8040-c54be413644e',
          application: 12722114
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2019-05-10T11:01:15Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    appliedDate: '2019-03-27T10:20:23+00:00'
  },
  {
    name: {
      givenName: 'Claire',
      familyName: 'Sayers',
      fullName: 'Claire Sayers',
      displayName: 'Claire'
    },
    email: 'claire@egjpress.press',
    status: 'Active',
    photoUrl:
      'https://secure.gravatar.com/avatar/b1cfd5d3ccb32afd23255c6ef7d30244.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0025-48.png',
    services: {
      slack: {
        id: 'UJFA5T9PH',
        email: 'claire@egjpress.press',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'UJFA5T9PH',
        email: 'claire@egjpress.press'
      }
    },
    isDeleted: false,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Maureen',
      familyName: 'Schiavo',
      fullName: 'Maureen Schiavo',
      displayName: 'Maureen Schiavo'
    },
    email: 'maureen@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2019-09-02/746307676677_924251f124bee6a2684c_original.jpg',
    dataSources: {
      google: {
        id: '104330065779711456443',
        emails: [
          {
            address: 'mulkigirl@verizon.net',
            type: 'other'
          },
          {
            address: 'maureen@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UBBN69GTC',
        email: 'maureen@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'mulkigirl@verizon.net',
          id: '1ac1b441-2608-47ce-9ff3-980c3c1f7934'
        },
        personal: {
          email: 'mulkigirl@verizon.net',
          id: '1ac1b441-2608-47ce-9ff3-980c3c1f7934',
          application: 7964102
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UBBN69GTC',
        email: 'maureen@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '1ac1b441-2608-47ce-9ff3-980c3c1f7934',
        email: 'mulkigirl@verizon.net',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-06-21T15:07:29Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Maureen',
    appliedDate: '2017-05-31T15:43:16+00:00'
  },
  {
    name: {
      givenName: 'Nadia',
      familyName: 'schnitzel',
      fullName: 'Nadia schnitzel',
      displayName: 'Nadia schnitzel'
    },
    email: 'writersrock1234@gmail.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'writersrock1234@gmail.com',
          id: '2b59819c-4dfe-49ec-93cd-5bc61e9b7ff8',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-01-25T12:58:16+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Constance',
      familyName: 'Schultz',
      fullName: 'Constance Schultz',
      displayName: 'connie'
    },
    email: 'conshu49@yahoo.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/93a9d6b778d7fd2257a64a0aedb5db3e.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0022-48.png',
    services: {
      slack: {
        id: 'U49CRUH0R',
        email: 'conshu49@yahoo.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U49CRUH0R',
        email: 'conshu49@yahoo.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Jacquelyn ',
      familyName: 'Scott',
      fullName: 'Jacquelyn Scott',
      displayName: 'Jacquelyn Scott'
    },
    email: 'jacquelyn@egjpress.org',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2018-03-20/333134922962_c3401c50b6adc0a5b168_original.jpg',
    dataSources: {
      google: {
        id: '112130933626691408941',
        emails: [
          {
            address: 'jacquelyn@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U9SCYQ1RP',
        email: 'jacquelyn@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U9SCYQ1RP',
        email: 'jacquelyn@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-03-20T15:43:00Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'Jacquelyn'
  },
  {
    name: {
      givenName: 'Jacquelyn',
      familyName: 'Scott',
      fullName: 'Jacquelyn Scott',
      displayName: 'Jacquelyn Scott'
    },
    email: 'jacquelynlscott@gmail.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'jacquelynlscott@gmail.com',
          id: '4e75d000-6485-4b85-9c67-09fdc04b4faf',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-12-12T10:01:52+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Kelsie',
      familyName: 'Seehusen',
      fullName: 'Kelsie Seehusen',
      displayName: 'Kelsie Seehusen'
    },
    email: 'kelsie@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-07-27/406362768306_75ff0c54fbb650a051e1_original.jpg',
    dataSources: {
      google: {
        id: '107248574036981732034',
        emails: [
          {
            address: 'kelsie.seehusen@gmail.com',
            type: 'other'
          },
          {
            address: 'kelsie@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UBV9JRQHH',
        email: 'kelsie@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UBV9JRQHH',
        email: 'kelsie@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-07-23T18:10:45Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'kelsie'
  },
  {
    name: {
      givenName: 'Leonard',
      familyName: 'Seet',
      fullName: 'Leonard Seet',
      displayName: 'lseet'
    },
    email: 'leonardoseet@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/29d8bb458acaa674ca51cc5d561190c7.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0021-48.png',
    services: {
      slack: {
        id: 'U03JYMBTR',
        email: 'leonardoseet@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '27383531-10af-4ccb-9bd0-0a3e314039e3',
        email: 'leonardoseet@gmail.com',
        enabled: true
      }
    },
    dataSources: {
      slack: {
        id: 'U03JYMBTR',
        email: 'leonardoseet@gmail.com'
      },
      submittable: {
        staff: {
          email: 'leonardoseet@gmail.com',
          id: '27383531-10af-4ccb-9bd0-0a3e314039e3'
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Brandon J',
      familyName: 'Semien',
      fullName: 'Brandon J Semien',
      displayName: 'Brandon Semien'
    },
    email: 'bjsemien23@yahoo.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'bjsemien23@yahoo.com',
          id: 'e5dbebbc-0b63-43dd-99b3-e765ddc78352',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-04-01T19:37:36+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'John',
      familyName: 'Sexton',
      fullName: 'John Sexton',
      displayName: 'John Sexton'
    },
    email: 'johns@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '117944870952050510439',
        emails: [
          {
            address: 'johnsextonfl@gmail.com',
            type: 'other'
          },
          {
            address: 'johns@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UJFABRAET',
        email: 'johns@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'johns@egjpress.org',
          id: '3d810387-2496-4fbc-9afa-e824eb5fda69'
        },
        personal: {
          email: 'johnsextonfl@gmail.com',
          id: '33a315b1-7795-4c96-b402-4a203a2bc457',
          application: 12816823
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UJFABRAET',
        email: 'johns@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '3d810387-2496-4fbc-9afa-e824eb5fda69',
        email: 'johns@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2019-05-03T11:56:07Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'John',
    appliedDate: '2019-04-06T18:57:27+00:00'
  },
  {
    name: {
      givenName: 'Rachna',
      familyName: 'Shah',
      fullName: 'Rachna Shah',
      displayName: 'rachna_shah'
    },
    email: 'shah.r.rachna@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2017-07-18/213574329392_6e8364a28ec63855d2b9_original.png',
    services: {
      slack: {
        id: 'U3QPZNK0S',
        email: 'shah.r.rachna@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U3QPZNK0S',
        email: 'shah.r.rachna@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Johanna',
      familyName: 'Shaw',
      fullName: 'Johanna Shaw',
      displayName: 'Kelsie Shaw'
    },
    email: 'johannashaw.writer@gmail.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'johannashaw.writer@gmail.com',
          id: 'd7051915-84c7-4d35-9fba-fe370cf5196d',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-07-12T13:40:12+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Alexandra',
      familyName: 'Shaw',
      fullName: 'Alexandra Shaw',
      displayName: 'Alexandra Shaw'
    },
    email: 'alexandra.shaw@live.co.uk',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'alexandra.shaw@live.co.uk',
          id: 'ad5aa4de-c59f-475a-a996-66b7906889ef',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2019-12-11T09:37:34+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Austin',
      familyName: 'Shay',
      fullName: 'Austin Shay',
      displayName: 'amshay'
    },
    email: 'ashay@theparagonjournal.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/24274d14bc8219e253dcbb9319680aaf.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0015-48.png',
    services: {
      slack: {
        id: 'U0ZUWATLM',
        email: 'ashay@theparagonjournal.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0ZUWATLM',
        email: 'ashay@theparagonjournal.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Jay',
      familyName: 'Sheets',
      fullName: 'Jay Sheets',
      displayName: 'jaysheets'
    },
    email: 'jay.sheets@goddard.edu',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/a1f3d6e903de022e384712da9391fad2.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0023-48.png',
    services: {
      slack: {
        id: 'U07K02T1V',
        email: 'jay.sheets@goddard.edu',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U07K02T1V',
        email: 'jay.sheets@goddard.edu'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Anish',
      familyName: 'Shekar',
      fullName: 'Anish Shekar',
      displayName: 'Anish  Shekar'
    },
    email: 'dranishshekar@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'dranishshekar@gmail.com',
          id: '18b133d7-de53-4b09-a496-e40cf9871361',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2019-06-14T22:14:34+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Nina',
      familyName: 'Shepardson',
      fullName: 'Nina Shepardson',
      displayName: 'nina'
    },
    email: 'nmallozzi@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/5c47bc7ed66c67d772b61f1ca96ae260.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0026-48.png',
    services: {
      slack: {
        id: 'U0385STUS',
        email: 'nmallozzi@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0385STUS',
        email: 'nmallozzi@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Ailun',
      familyName: 'Shi',
      fullName: 'Ailun Shi',
      displayName: 'Ailun Shi'
    },
    email: 'ailun@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '107524658873817893238',
        emails: [
          {
            address: 'ailun.shi@aol.com',
            type: 'other'
          },
          {
            address: 'ailun@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UDVH7PDP1',
        email: 'ailun@egjpress.org'
      },
      submittable: {
        personal: {
          email: 'ailun.shi@aol.com',
          id: '4ef782e9-afcb-4111-a8c1-e2220a2d3382',
          application: 11491305
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UDVH7PDP1',
        email: 'ailun@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-11-15T08:56:17Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'Ailun',
    appliedDate: '2018-10-31T00:34:55+00:00'
  },
  {
    name: {
      givenName: 'Alison',
      familyName: 'Silverglad',
      fullName: 'Alison Silverglad',
      displayName: 'asilverglad'
    },
    email: 'alisonsilverglad@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/8f67c5fbfac8618ae28bb2ec69bbc262.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0008-48.png',
    services: {
      slack: {
        id: 'U038AUFDW',
        email: 'alisonsilverglad@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U038AUFDW',
        email: 'alisonsilverglad@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Arushi',
      familyName: 'Singh',
      fullName: 'Arushi Singh',
      displayName: 'Arushi Singh'
    },
    email: 'arushi@egjpress.org',
    status: 'Disabled',
    photoUrl: null,
    dataSources: {
      google: {
        id: '105240121603854493175',
        emails: [
          {
            address: 'arushi@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UA90KT5R6',
        email: 'arushi@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UA90KT5R6',
        email: 'arushi@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-04-19T13:57:00Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'arushi'
  },
  {
    name: {
      givenName: 'Arushi',
      familyName: 'Singh',
      fullName: 'Arushi Singh',
      displayName: 'Arushi Singh'
    },
    email: 'arushi.singh1296@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'arushi.singh1296@gmail.com',
          id: '9f7b6f75-326b-428d-9971-96e3e75398a1',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-04-06T05:16:35+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Tanya',
      familyName: 'Singh',
      fullName: 'Tanya Singh',
      displayName: 'Tanya Singh'
    },
    email: 'tanya@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-03-27/337679662310_52630f36d3375a7733a8_original.jpg',
    dataSources: {
      google: {
        id: '114496361490404499951',
        emails: [
          {
            address: 'tanyasingh2719@yahoo.in',
            type: 'other'
          },
          {
            address: 'tanya@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U9W4RK23T',
        email: 'tanya@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'tanya@egjpress.org',
          id: '94ba1946-e009-4c81-acdc-f1b5d968ab76'
        },
        personal: {
          email: 'tanyasingh2719@yahoo.in',
          id: '2e9a7e11-7dbf-4fb6-b12b-94fcdbce9f99',
          application: 8010846
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U9W4RK23T',
        email: 'tanya@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '94ba1946-e009-4c81-acdc-f1b5d968ab76',
        email: 'tanya@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-03-27T10:30:19Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Tanya Singh',
    appliedDate: '2017-06-09T00:20:06+00:00'
  },
  {
    name: {
      givenName: 'Kristen',
      familyName: 'Skerry Andrews',
      fullName: 'Kristen Skerry Andrews',
      displayName: 'kristenskerry'
    },
    email: 'kristen.skerry@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2015-02-16/3744144184_d19c8adb03faf5337b7d_original.jpg',
    services: {
      slack: {
        id: 'U037PSGGF',
        email: 'kristen.skerry@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U037PSGGF',
        email: 'kristen.skerry@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Lillian',
      familyName: 'Smith',
      fullName: 'Lillian Smith',
      displayName: 'Lillian Smith'
    },
    email: 'lillian@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-11-02/471978677910_918f541259164093a8f3_original.jpg',
    dataSources: {
      google: {
        id: '105052460035020024929',
        emails: [
          {
            address: 'lillianchinasmith@gmail.com',
            type: 'other'
          },
          {
            address: 'lillian@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UDTPGJX5W',
        email: 'lillian@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'lillianchinasmith@gmail.com',
          id: '8333153b-424c-472c-8634-295d1c0c79ce'
        },
        personal: {
          email: 'lillianchinasmith@gmail.com',
          id: '8333153b-424c-472c-8634-295d1c0c79ce',
          application: 11359202
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UDTPGJX5W',
        email: 'lillian@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '8333153b-424c-472c-8634-295d1c0c79ce',
        email: 'lillianchinasmith@gmail.com',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-11-15T08:56:30Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'lillian',
    appliedDate: '2018-10-14T10:57:33+00:00'
  },
  {
    name: {
      givenName: 'Maverick',
      familyName: 'Smith',
      fullName: 'Maverick Smith',
      displayName: 'msmith'
    },
    email: 'mavericksmsmith@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/d5a8630b9809a70250ae97751d2ba744.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0023-48.png',
    services: {
      slack: {
        id: 'U2Y7Z9C80',
        email: 'mavericksmsmith@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U2Y7Z9C80',
        email: 'mavericksmsmith@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Cindy',
      familyName: 'Song',
      fullName: 'Cindy Song',
      displayName: 'cindy'
    },
    email: 'cindysong714@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2017-04-02/163392991653_2278c0d535c1f4e2f865_original.jpg',
    services: {
      slack: {
        id: 'U3GF178SC',
        email: 'cindysong714@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U3GF178SC',
        email: 'cindysong714@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Makani',
      familyName: 'Speier-Brito',
      fullName: 'Makani Speier-Brito',
      displayName: 'makanisb'
    },
    email: 'makanisb@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/6090215ba7631c255adbfd79d5246581.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0017-48.png',
    services: {
      slack: {
        id: 'U03HV64TR',
        email: 'makanisb@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U03HV64TR',
        email: 'makanisb@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Lee G',
      familyName: 'Spletter',
      fullName: 'Lee G Spletter',
      displayName: 'Lee Spletter'
    },
    email: 'lees32118@yahoo.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'lees32118@yahoo.com',
          id: '7326df66-33c5-4ef6-b610-382af7301abf',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-08-01T19:26:07+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Smrithi',
      familyName: 'Srinivasan',
      fullName: 'Smrithi Srinivasan',
      displayName: 'Smrithi Srinivasan'
    },
    email: 'smrithisrinivasan47@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'smrithisrinivasan47@gmail.com',
          id: '32b333a7-eee6-4473-9b26-db808e8e9e89',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-07-23T21:13:03+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Smrithi',
      familyName: 'Srinivasan',
      fullName: 'Smrithi Srinivasan',
      displayName: 'Smrithi Srinivasan'
    },
    email: 'smrithi@egjpress.org',
    status: 'Disabled',
    photoUrl: null,
    dataSources: {
      google: {
        id: '115848314722393567015',
        emails: [
          {
            address: 'smrithi@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UAEUN78UQ',
        email: 'smrithi@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UAEUN78UQ',
        email: 'smrithi@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-04-30T10:38:56Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'smrithi'
  },
  {
    name: {
      givenName: 'Abigail',
      familyName: 'St John',
      fullName: 'Abigail St John',
      displayName: 'Abigail St John'
    },
    email: 'abirosestjohn@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'abirosestjohn@gmail.com',
          id: 'a2fd0199-a823-444f-b4c1-e2acc1bb576f',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2019-08-06T20:47:39+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Laura-Marie',
      familyName: 'Steele',
      fullName: 'Laura-Marie Steele',
      displayName: 'laura'
    },
    email: 'l-ms@outlook.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/dbcdf4ef88c1555f11bfa0da260c01d2.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0022-48.png',
    services: {
      slack: {
        id: 'U037KH09V',
        email: 'l-ms@outlook.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U037KH09V',
        email: 'l-ms@outlook.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: null,
      familyName: 'Steier',
      fullName: 'Kristen Steier',
      displayName: ''
    },
    email: 'steier.k04@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/69259b904a700f49f3598c98e5bc6e22.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0024-48.png',
    services: {
      slack: {
        id: 'UC1G128RG',
        email: 'steier.k04@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'UC1G128RG',
        email: 'steier.k04@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Katie',
      familyName: 'Stephens',
      fullName: 'Katie Stephens',
      displayName: 'katiestephens'
    },
    email: 'standardishue@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/58c8599d79be8ea960773603a11799a7.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0002-48.png',
    services: {
      slack: {
        id: 'U037GMXKF',
        email: 'standardishue@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U037GMXKF',
        email: 'standardishue@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Lisa',
      familyName: 'Stilburn',
      fullName: 'Lisa Stilburn',
      displayName: 'Lisa Stilburn'
    },
    email: 'lisa@egjpress.org',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2018-03-21/333601505905_d533e0344a7e9623c568_original.jpg',
    dataSources: {
      google: {
        id: '111387860294776278294',
        emails: [
          {
            address: 'lisa@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U9TL8LHPE',
        email: 'lisa@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U9TL8LHPE',
        email: 'lisa@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-03-22T21:00:20Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'lisa'
  },
  {
    name: {
      givenName: 'Lisa',
      familyName: 'Stilburn',
      fullName: 'Lisa Stilburn',
      displayName: 'Lisa Stilburn'
    },
    email: 'lisa.stilburn@hotmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'lisa.stilburn@hotmail.com',
          id: 'a9492db5-56ff-48c5-aebd-253fcc4cdb05',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-01-27T23:38:07+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Tammy',
      familyName: 'Stoner',
      fullName: 'Tammy Stoner',
      displayName: 'tammylynnestoner'
    },
    email: 'tammylynnestoner@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2015-01-20/3466664989_c5519b91e65abaab75ac_original.jpg',
    services: {
      slack: {
        id: 'U03DSLPUC',
        email: 'tammylynnestoner@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U03DSLPUC',
        email: 'tammylynnestoner@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Erin ',
      familyName: 'Strubbe',
      fullName: 'Erin Strubbe',
      displayName: 'Erin Strubbe'
    },
    email: 'erin@egjpress.org',
    status: 'Disabled',
    photoUrl: null,
    dataSources: {
      google: {
        id: '102805707397849706172',
        emails: [
          {
            address: 'erin@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UAZ8NKPRR',
        email: 'erin@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UAZ8NKPRR',
        email: 'erin@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-05-31T14:18:27Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'erin'
  },
  {
    name: {
      givenName: 'Phillip',
      familyName: 'Stubley',
      fullName: 'Phillip Stubley',
      displayName: 'Phillip Stubley'
    },
    email: 'phillip@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '111007528173117932909',
        emails: [
          {
            address: 'philipstubley@hotmail.com',
            type: 'other'
          },
          {
            address: 'phillip@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UJF9XT9EK',
        email: 'phillip@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'phillip@egjpress.org',
          id: '1bd43b56-c17a-453d-9dbb-de17d10526c3'
        },
        personal: {
          email: 'philipstubley@hotmail.com',
          id: '4039c6ca-41d9-47f1-9cd0-9b9c5d60feae',
          application: 12086766
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UJF9XT9EK',
        email: 'phillip@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '1bd43b56-c17a-453d-9dbb-de17d10526c3',
        email: 'phillip@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2019-05-03T11:34:04Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'phillip',
    appliedDate: '2019-01-17T13:55:52+00:00'
  },
  {
    name: {
      givenName: 'Brianna',
      familyName: 'Suazo',
      fullName: 'Brianna Suazo',
      displayName: 'Brianna Suazo'
    },
    email: 'brianna@egjarts.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2019-12-05/849495700178_22607aee05e3c976ec49_original.png',
    dataSources: {
      google: {
        id: '106857903685852341871',
        emails: [
          {
            address: 'brisuazo95@gmail.com',
            type: 'work'
          },
          {
            address: 'brianna@egjarts.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UR2QYHAQ0',
        email: 'brianna@egjarts.org'
      },
      submittable: {
        staff: {
          email: 'brianna@egjarts.org',
          id: '779a38a2-d37e-4aec-ac98-c8374545a833'
        },
        personal: {
          email: 'brisuazo95@gmail.com',
          id: 'c30a6f9b-e93f-41c6-aa71-77a227e91f2b',
          application: 13522985
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UR2QYHAQ0',
        email: 'brianna@egjarts.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '779a38a2-d37e-4aec-ac98-c8374545a833',
        email: 'brianna@egjarts.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2019-11-28T13:16:16Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Brianna',
    appliedDate: '2019-07-15T21:52:02+00:00'
  },
  {
    name: {
      givenName: 'Angelic',
      familyName: 'Sugai',
      fullName: 'Angelic Sugai',
      displayName: 'angelic.s'
    },
    email: 'robangelic@yahoo.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2014-12-18/3255207383_eb8b448837c1c74d5618_original.jpg',
    services: {
      slack: {
        id: 'U037JCM92',
        email: 'robangelic@yahoo.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U037JCM92',
        email: 'robangelic@yahoo.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Grae',
      familyName: 'Sutphin',
      fullName: 'Grae Sutphin',
      displayName: 'Grae Sutphin'
    },
    email: 'grae@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-09-26/445069429751_b3ca0fcd99972fadca26_original.jpg',
    dataSources: {
      google: {
        id: '114866386394468702220',
        emails: [
          {
            address: 'graesutphins@gmail.com',
            type: 'other'
          },
          {
            address: 'grae@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl:
          'https://www.google.com/s2/photos/private/AIbEiAIAAABECIywh8CQ9YCozgEiC3ZjYXJkX3Bob3RvKig2ZWJmNGUyNTVjZjdlYTJmYTNiZjllYjI4NzUwOTY3ZTc0YjE3OWE0MAEAeBCOU4ECQVMLSfcGDzPsmfyChw'
      },
      slack: {
        id: 'UD0H9GVLG',
        email: 'grae@egjpress.org'
      },
      submittable: {
        personal: {
          email: 'graesutphins@gmail.com',
          id: 'f27cdd78-c9a8-4481-9195-a371c13be70a',
          application: 11052423
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UD0H9GVLG',
        email: 'grae@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-09-26T10:20:56Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'Grae',
    appliedDate: '2018-09-05T13:19:36+00:00'
  },
  {
    name: {
      givenName: 'Jeff',
      familyName: 'Suwak',
      fullName: 'Jeff Suwak',
      displayName: 'jsuwak'
    },
    email: 'jeffsuwak@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/556d84213fb1a29aba1185ea501d256d.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0015-48.png',
    services: {
      slack: {
        id: 'U03A0AB21',
        email: 'jeffsuwak@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U03A0AB21',
        email: 'jeffsuwak@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Charika',
      familyName: 'Swanepoel',
      fullName: 'Charika Swanepoel',
      displayName: 'Charika Swanepoel'
    },
    email: 'charikaswanepoel@rocketmail.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'charikaswanepoel@rocketmail.com',
          id: '4c4717b3-4184-447e-8c1d-51df6670c5d2',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-09-27T09:28:12+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Charika ',
      familyName: 'Swanepoel',
      fullName: 'Charika Swanepoel',
      displayName: 'Charika Swanepoel'
    },
    email: 'charika@egjpress.org',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2018-03-20/332435760544_41c6ca33fb24980ee474_original.png',
    dataSources: {
      google: {
        id: '102422940313918116519',
        emails: [
          {
            address: 'charika@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U9SA84Q9W',
        email: 'charika@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U9SA84Q9W',
        email: 'charika@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-03-20T15:42:57Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'Charika'
  },
  {
    name: {
      givenName: 'AiJia',
      familyName: 'Tah',
      fullName: 'AiJia Tah',
      displayName: 'AiJia Tah'
    },
    email: 'aijia@egjarts.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2019-11-25/840267943953_934211235ea1cc2afa92_original.jpg',
    dataSources: {
      google: {
        id: '110370055680075394553',
        emails: [
          {
            address: 'hinatatah@gmail.com',
            type: 'work'
          },
          {
            address: 'aijia@egjarts.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UQXV63K5E',
        email: 'aijia@egjarts.org'
      },
      submittable: {
        staff: {
          email: 'aijia@egjarts.org',
          id: '1b10f79f-790e-4bc0-976f-f129877deb87'
        },
        personal: {
          email: 'hinatatah@gmail.com',
          id: '88f00f4b-e689-4f38-9470-c418bc86f66c',
          application: 13301813
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UQXV63K5E',
        email: 'aijia@egjarts.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '1b10f79f-790e-4bc0-976f-f129877deb87',
        email: 'aijia@egjarts.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2019-11-25T12:52:22Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Ai Jia',
    appliedDate: '2019-06-10T03:20:06+00:00'
  },
  {
    name: {
      givenName: 'Mahinour A',
      familyName: 'Tawfik',
      fullName: 'Mahinour A Tawfik',
      displayName: 'Mahinour Tawfik'
    },
    email: 'poetesstawfik@gmail.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'poetesstawfik@gmail.com',
          id: 'aecc7a37-b287-4ff3-be8e-7ca31318246f',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-11-27T11:16:05+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Kelsey',
      familyName: 'Taylor',
      fullName: 'Kelsey Taylor',
      displayName: 'Kelsey Taylor'
    },
    email: 'kelseytaylor25@outlook.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'kelseytaylor25@outlook.com',
          id: '10ba7e6f-dd0d-4837-8f6d-3dffb2456c11',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-08-15T16:30:37+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Front ',
      familyName: 'Team Mailbox',
      fullName: 'Front Team Mailbox',
      displayName: 'Front Team Mailbox'
    },
    email: 'front@egjarts.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '107856365706597605901',
        emails: [
          {
            address: 'brian@egjarts.org',
            type: 'other'
          },
          {
            address: 'front@egjarts.org',
            primary: true
          },
          {
            address: 'front@egjpress.org'
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UL63P2Y2Y',
        email: 'front@egjarts.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UL63P2Y2Y',
        email: 'front@egjarts.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-06-04T18:37:52Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'front516'
  },
  {
    name: {
      givenName: 'Ayşe',
      familyName: 'Tekşen',
      fullName: 'Ayşe Tekşen',
      displayName: 'Ayşe Tekşen'
    },
    email: 'ayseteksen@gmail.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'ayseteksen@gmail.com',
          id: '500d0cbb-d2e2-47b0-b862-855a3759b101',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-08-03T05:26:00+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'SSO',
      familyName: 'Test',
      fullName: 'SSO Test',
      displayName: 'test-sso'
    },
    email: 'test-sso@egjpress.org',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/a7e25dfa9d1c3453bf269247e5248fba.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0007-48.png',
    services: {
      slack: {
        id: 'U8F7A751T',
        email: 'test-sso@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U8F7A751T',
        email: 'test-sso@egjpress.org'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Heather',
      familyName: 'Thompson',
      fullName: 'Heather Thompson',
      displayName: 'Heather Thompson'
    },
    email: 'heather@egjpress.org',
    status: 'Disabled',
    photoUrl: null,
    dataSources: {
      google: {
        id: '117962409669682830522',
        emails: [
          {
            address: 'heather@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UDH3NLFDJ',
        email: 'heather@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'heather@egjpress.org',
          id: '8c01499d-28b4-4762-bfc5-9fc3899232c9'
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UDH3NLFDJ',
        email: 'heather@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '8c01499d-28b4-4762-bfc5-9fc3899232c9',
        email: 'heather@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-10-18T16:18:03Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'heather'
  },
  {
    name: {
      givenName: 'Saige',
      familyName: 'Thornley',
      fullName: 'Saige Thornley',
      displayName: 'Kyra Saige'
    },
    email: 'thornleychick@hotmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'thornleychick@hotmail.com',
          id: 'd6178f5a-5135-4c46-ae2f-a2249b44b639',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-06-21T12:11:41+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Tim',
      familyName: 'Tim',
      fullName: 'Tim',
      displayName: 'timothy'
    },
    email: 'tiancheng.lu@concordacademy.org',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/6a6b510d4759dd38bc128d8c2d6e92ed.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0026-48.png',
    services: {
      slack: {
        id: 'U0G15J4CU',
        email: 'tiancheng.lu@concordacademy.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0G15J4CU',
        email: 'tiancheng.lu@concordacademy.org'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Ayesha Z',
      familyName: 'Tirmzi',
      fullName: 'Ayesha Z Tirmzi',
      displayName: 'Ayesha Tirmzi'
    },
    email: 'aye_tirmzi54@yahoo.co.uk',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'aye_tirmzi54@yahoo.co.uk',
          id: '09bb3282-98d1-457e-b53f-74bb6dd43b8b',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-09-12T12:37:08+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Jennifer',
      familyName: 'Todhunter',
      fullName: 'Jennifer Todhunter',
      displayName: 'jen'
    },
    email: 'jen@todhunter.ca',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/fc12158dd4d6a2b86ef636b1857f7a0c.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0006-48.png',
    services: {
      slack: {
        id: 'U09D19LHL',
        email: 'jen@todhunter.ca',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U09D19LHL',
        email: 'jen@todhunter.ca'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Gray',
      familyName: 'Torres',
      fullName: 'Gray Torres',
      displayName: 'gt123'
    },
    email: 'gray.torres91@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/606418f11bbdea0861fd9b67131ef4e2.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0007-48.png',
    services: {
      slack: {
        id: 'U4PJX9BJP',
        email: 'gray.torres91@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U4PJX9BJP',
        email: 'gray.torres91@gmail.com'
      },
      submittable: {
        personal: {
          email: 'gray.torres91@gmail.com',
          id: '2326ec42-817f-4511-ba68-f18d87b69277',
          application: 7439495
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2017-03-10T12:13:10+00:00'
  },
  {
    name: {
      givenName: 'Brian',
      familyName: 'Toups',
      fullName: 'Brian Toups',
      displayName: 'toups'
    },
    email: 'trinityracer@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/75d62ab2601632e886cfe4a391a972f4.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0004-48.png',
    services: {
      slack: {
        id: 'U0G9ZDGF8',
        email: 'trinityracer@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0G9ZDGF8',
        email: 'trinityracer@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Jerard',
      familyName: 'Trombka',
      fullName: 'Jerard Trombka',
      displayName: 'Jerard Trombka'
    },
    email: 'jerard@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '117275003799190195219',
        emails: [
          {
            address: 'painless@burningman.com',
            type: 'other'
          },
          {
            address: 'jerard@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UJDEZTDLY',
        email: 'jerard@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UJDEZTDLY',
        email: 'jerard@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2019-05-03T11:24:29Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'Jerard'
  },
  {
    name: {
      givenName: 'Stuart',
      familyName: 'Turnbull',
      fullName: 'Stuart Turnbull',
      displayName: 'clivetern'
    },
    email: 'stuart.turnbull@icloud.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/82b7aa405b3f5bc040270f666b97e758.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0017-48.png',
    services: {
      slack: {
        id: 'U0371EWJ6',
        email: 'stuart.turnbull@icloud.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0371EWJ6',
        email: 'stuart.turnbull@icloud.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'UAPN4SYF6',
      familyName: 'UAPN4SYF6',
      fullName: 'UAPN4SYF6',
      displayName: 'UAPN4SYF6'
    },
    email: 'deleted-uapn4syf6@egjpress.org',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/40e93ad975c5eb28b7593d3b5c9700ea.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0001-48.png',
    services: {
      slack: {
        id: 'UAPN4SYF6',
        email: 'deleted-uapn4syf6@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'UAPN4SYF6',
        email: 'deleted-uapn4syf6@egjpress.org'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Inactive',
      familyName: 'User',
      fullName: 'Inactive User',
      displayName: 'inactive-president'
    },
    email: 'inactive-president@egjarts.org',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/694c7cd45f5331b1eebd0bf971b85ad5.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0014-48.png',
    services: {
      slack: {
        id: 'U5R774V7G',
        email: 'inactive-president@egjarts.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U5R774V7G',
        email: 'inactive-president@egjarts.org'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Britney',
      familyName: 'Vildor',
      fullName: 'Britney Vildor',
      displayName: 'Britney Vildor'
    },
    email: 'britneyv100@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'britneyv100@gmail.com',
          id: '131b9507-610d-4f6b-8400-023333f4d552',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2019-10-26T19:41:25+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Demo',
      familyName: 'Volunteer',
      fullName: 'Demo Volunteer',
      displayName: 'Demo Volunteer'
    },
    email: 'demo@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '108068501674283291827',
        emails: [
          {
            address: 'egj.demo.volunteer.01@gmail.com',
            type: 'work'
          },
          {
            address: 'demo@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UQ3UKCW81',
        email: 'demo@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'demo@egjpress.org',
          id: 'a717c511-afc4-4b1b-91bc-f73f500acd39'
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UQ3UKCW81',
        email: 'demo@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: 'a717c511-afc4-4b1b-91bc-f73f500acd39',
        email: 'demo@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2019-11-08T22:25:45Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'demo'
  },
  {
    name: {
      givenName: 'Sara',
      familyName: 'Walker',
      fullName: 'Sara Walker',
      displayName: 'sarawalker'
    },
    email: 'walkersarac@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/badc032d28427d66c8254c3226dcc9ff.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0011-48.png',
    services: {
      slack: {
        id: 'U28KAUT1Q',
        email: 'walkersarac@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U28KAUT1Q',
        email: 'walkersarac@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Jaelynn',
      familyName: 'Walls',
      fullName: 'Jaelynn Walls',
      displayName: 'jaelynnwalls'
    },
    email: 'simplejdw@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/6ca4c18bd4b04cbd9d356021f7bd4b9d.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0001-48.png',
    services: {
      slack: {
        id: 'U07J069QR',
        email: 'simplejdw@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U07J069QR',
        email: 'simplejdw@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Diane',
      familyName: 'Walters',
      fullName: 'Diane Walters',
      displayName: 'Diane Walters'
    },
    email: 'diane@egjpress.org',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2017-10-20/259075793393_d220a3ace08a7812e1c8_original.jpg',
    dataSources: {
      google: {
        id: '100142668705656154530',
        emails: [
          {
            address: 'diane@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U7LGML63S',
        email: 'diane@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U7LGML63S',
        email: 'diane@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-03-28T19:19:52Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'dianewalters'
  },
  {
    name: {
      givenName: 'Diane',
      familyName: 'Walters',
      fullName: 'Diane Walters',
      displayName: 'Diane Walters'
    },
    email: 'dianewalters@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-09-06/430829863266_0eb51972b68ca4ac093c_original.jpg',
    dataSources: {
      google: {
        id: '116262994011548677270',
        emails: [
          {
            address: 'dianewalters@centurylink.net',
            type: 'home'
          },
          {
            address: 'dianewalters@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UL674LFNY',
        email: 'dianewalters@egjpress.org'
      },
      submittable: {
        personal: {
          email: 'dianewalters@centurylink.net',
          id: 'd2c332a0-ebef-43b1-8017-2ce5be4d5fc5',
          application: 8725224
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UL674LFNY',
        email: 'dianewalters@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2019-06-17T23:31:15Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'diane',
    appliedDate: '2017-10-10T15:57:22+00:00'
  },
  {
    name: {
      givenName: 'Lindsay',
      familyName: 'Wang',
      fullName: 'Lindsay Wang',
      displayName: 'Lindsay Wang'
    },
    email: 'lindsay@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '102220272539189429923',
        emails: [
          {
            address: 'lindsay@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UEG6VH89G',
        email: 'lindsay@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'lindsay@egjpress.org',
          id: '0658cd11-c98c-478b-9770-2f9bb2994efd'
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UEG6VH89G',
        email: 'lindsay@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '0658cd11-c98c-478b-9770-2f9bb2994efd',
        email: 'lindsay@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-11-29T15:09:39Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'lindsayw.'
  },
  {
    name: {
      givenName: 'Lindsay',
      familyName: 'Wang',
      fullName: 'Lindsay Wang',
      displayName: 'Lindsay Wang'
    },
    email: 'lindsayzwang@gmail.com',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-12-16/505136117459_4a917563f2c3302b0a0f_original.jpg',
    services: {
      slack: {
        id: 'UEGATLULB',
        email: 'lindsayzwang@gmail.com',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'UEGATLULB',
        email: 'lindsayzwang@gmail.com'
      },
      submittable: {
        personal: {
          email: 'lindsayzwang@gmail.com',
          id: '8c059a21-8a7e-4c48-958a-41e1324c164f',
          application: 11663588
        }
      }
    },
    isDeleted: false,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2018-11-22T15:42:32+00:00'
  },
  {
    name: {
      givenName: 'Julia',
      familyName: 'Watson',
      fullName: 'Julia Watson',
      displayName: 'Julia Watson'
    },
    email: 'julia@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2019-04-15/608468349840_d18116f422d50c83dd05_original.jpg',
    dataSources: {
      google: {
        id: '102681614778100585808',
        emails: [
          {
            address: 'juliaewatson97@gmail.com',
            type: 'other'
          },
          {
            address: 'julia@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UHFLCB86P',
        email: 'julia@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'julia@egjpress.org',
          id: 'c726ffa3-9b4c-4f55-850d-eeb972a19fa1'
        },
        personal: {
          email: 'juliaewatson97@gmail.com',
          id: 'afe2bd34-efa7-488b-9bf0-0087664c0240',
          application: 12394891
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UHFLCB86P',
        email: 'julia@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: 'c726ffa3-9b4c-4f55-850d-eeb972a19fa1',
        email: 'julia@egjpress.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2019-04-10T12:47:49Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'Julia',
    appliedDate: '2019-02-18T18:04:30+00:00'
  },
  {
    name: {
      givenName: 'Kristina',
      familyName: 'Webster Shue',
      fullName: 'Kristina Webster Shue',
      displayName: 'kristina'
    },
    email: 'kwebster10@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/5c4a2c504a6fbbfb548508ec02eae21f.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0008-48.png',
    services: {
      slack: {
        id: 'U0YKZMH8X',
        email: 'kwebster10@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0YKZMH8X',
        email: 'kwebster10@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Lydia',
      familyName: 'Wei',
      fullName: 'Lydia Wei',
      displayName: 'Lydia Wei'
    },
    email: 'lydia.5.wei@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'lydia.5.wei@gmail.com',
          id: 'e803b5d7-2969-4c76-940c-49f7158c0d6c',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-02-22T19:18:45+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: null,
      familyName: 'Wells',
      fullName: 'George  Wells',
      displayName: 'George  Wells'
    },
    email: 'george+level1@egjpress.org',
    status: 'Active',
    photoUrl: null,
    services: {
      submittable: {
        id: '86876dfc-3fba-47b2-a09e-f8d7e07efa0c',
        email: 'george+level1@egjpress.org',
        enabled: true
      }
    },
    dataSources: {
      submittable: {
        staff: {
          email: 'george+level1@egjpress.org',
          id: '86876dfc-3fba-47b2-a09e-f8d7e07efa0c'
        }
      }
    },
    isDeleted: false,
    orgRoles: {
      press: [
        {
          name: 'Guest Reader',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'George',
      familyName: 'Wells',
      fullName: 'George Wells',
      displayName: 'george136'
    },
    email: 'example@example.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/23463b99b62a72f26ed677cc556c44e8.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0000-48.png',
    services: {
      slack: {
        id: 'U9LLFS2AG',
        email: 'example@example.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U9LLFS2AG',
        email: 'example@example.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Cherelle',
      familyName: 'Wells',
      fullName: 'Cherelle Wells',
      displayName: 'Cherelle Wells'
    },
    email: 'cherelle@egjpress.org',
    status: 'Disabled',
    photoUrl: null,
    dataSources: {
      google: {
        id: '106402602695034015626',
        emails: [
          {
            address: 'cherelle@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UAPUW5K2N',
        email: 'cherelle@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UAPUW5K2N',
        email: 'cherelle@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-05-15T10:55:51Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'cherelle'
  },
  {
    name: {
      givenName: 'George',
      familyName: 'Wells',
      fullName: 'George Wells',
      displayName: 'George Wells'
    },
    email: 'george@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2014-12-16/3237629361_091518b34132ddc6d3c1_original.jpg',
    dataSources: {
      google: {
        id: '114296102264466770821',
        emails: [
          {
            address: 'pwgabachito@gmail.com',
            type: 'other'
          },
          {
            address: 'george@egjpress.org',
            primary: true
          },
          {
            address: 'george@sparkanthology.org'
          },
          {
            address: 'george@zeteticrecord.org'
          },
          {
            address: 'editor@zeteticrecord.org'
          },
          {
            address: 'george@egjarts.org'
          },
          {
            address: 'george@sparkanthology.org.test-google-a.com'
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U0370NRUN',
        email: 'george@egjpress.org'
      },
      submittable: {
        staff: {
          email: 'pwgabachito@gmail.com',
          id: '078f7203-22eb-4ee8-b318-70ac52537f8a'
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U0370NRUN',
        email: 'george@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '078f7203-22eb-4ee8-b318-70ac52537f8a',
        email: 'pwgabachito@gmail.com',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2018-01-22T00:20:52Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'George'
  },
  {
    name: {
      givenName: 'Tara',
      familyName: 'Werner',
      fullName: 'Tara Werner',
      displayName: 'Tara Werner'
    },
    email: 'tara@egjarts.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2019-12-03/859710990535_51fbe0578e4dc38d9c69_original.jpg',
    dataSources: {
      google: {
        id: '115014850548015490094',
        emails: [
          {
            address: 'tarawerner3@gmail.com',
            type: 'work'
          },
          {
            address: 'tara@egjarts.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UR1F523RA',
        email: 'tara@egjarts.org'
      },
      submittable: {
        staff: {
          email: 'tara@egjarts.org',
          id: '27197a93-a93d-4fe7-91de-8457df020ab6'
        },
        personal: {
          email: 'tarawerner3@gmail.com',
          id: 'db68004c-cf6b-4d10-a3e9-dfa15b0e9f17',
          application: 13554095
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UR1F523RA',
        email: 'tara@egjarts.org',
        enabled: true,
        team: 'T036YRMDH'
      },
      submittable: {
        id: '27197a93-a93d-4fe7-91de-8457df020ab6',
        email: 'tara@egjarts.org',
        enabled: true
      }
    },
    isDeleted: false,
    joinDate: '2019-11-27T19:58:28Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: [
        {
          name: 'Reader',
          primary: true
        }
      ]
    },
    displayName: 'tara',
    appliedDate: '2019-07-21T18:39:46+00:00'
  },
  {
    name: {
      givenName: 'Louis',
      familyName: 'West',
      fullName: 'Louis West',
      displayName: 'louisjwest'
    },
    email: 'lwest31415@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2016-08-10/68302711408_39465ef9bd1c2ec82c5e_original.jpg',
    services: {
      slack: {
        id: 'U209BQS90',
        email: 'lwest31415@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U209BQS90',
        email: 'lwest31415@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Megan',
      familyName: 'Wester',
      fullName: 'Megan Wester',
      displayName: 'Megan Wester'
    },
    email: 'me.wester@yahoo.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'me.wester@yahoo.com',
          id: '638f7636-502a-4887-9c6b-f98bf381eba7',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-09-05T09:58:01+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Kevin R',
      familyName: 'White',
      fullName: 'Kevin R White',
      displayName: 'Kevin Richard White'
    },
    email: 'kevinrichardwhite88@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'kevinrichardwhite88@gmail.com',
          id: 'bfce3934-8d7d-4ddc-b62d-3857ded66606',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-11-20T19:57:02+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Alexandra',
      familyName: 'White',
      fullName: 'Alexandra White',
      displayName: 'Alexandra White'
    },
    email: 'alexm@egjpress.org',
    status: 'Active',
    photoUrl:
      'https://avatars.slack-edge.com/2018-11-09/477302851527_c36a4f7d7c88a909a4c8_original.jpg',
    dataSources: {
      google: {
        id: '113208587950093531097',
        emails: [
          {
            address: 'alexandramwhite2014@gmail.com',
            type: 'other'
          },
          {
            address: 'alexm@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UDTT99BPB',
        email: 'alexm@egjpress.org'
      },
      submittable: {
        personal: {
          email: 'alexandramwhite2014@gmail.com',
          id: 'bd33d1a1-19d7-4653-bb79-e0eb60f345c9',
          application: 11347408
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UDTT99BPB',
        email: 'alexm@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-11-15T08:56:24Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'Alex',
    appliedDate: '2018-10-12T13:58:19+00:00'
  },
  {
    name: {
      givenName: 'Kevin',
      familyName: 'White',
      fullName: 'Kevin White',
      displayName: 'Kevin White'
    },
    email: 'kevin@egjpress.org',
    status: 'Disabled',
    photoUrl: null,
    dataSources: {
      google: {
        id: '113706604012950166284',
        emails: [
          {
            address: 'kevin@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UEEFPMQKS',
        email: 'kevin@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UEEFPMQKS',
        email: 'kevin@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-11-29T15:10:36Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'kevin'
  },
  {
    name: {
      givenName: 'Jessica ',
      familyName: 'Williams',
      fullName: 'Jessica Williams',
      displayName: 'Jessica Williams'
    },
    email: 'jessica@egjpress.org',
    status: 'Active',
    photoUrl: null,
    dataSources: {
      google: {
        id: '113249373946116468847',
        emails: [
          {
            address: 'jesswrites1997@gmail.com',
            type: 'other'
          },
          {
            address: 'jessica@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UACE2QPKP',
        email: 'jessica@egjpress.org'
      },
      submittable: {
        personal: {
          email: 'jesswrites1997@gmail.com',
          id: '6a19c207-86e4-4a48-8c0b-3ef5ff23cb40',
          application: 9720759
        }
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UACE2QPKP',
        email: 'jessica@egjpress.org',
        enabled: true,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-04-03T17:22:37Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'Jessica',
    appliedDate: '2018-02-22T13:21:46+00:00'
  },
  {
    name: {
      givenName: 'Carmen M',
      familyName: 'Wilson',
      fullName: 'Carmen M Wilson',
      displayName: 'Carmen Wilson'
    },
    email: 'carmenmwilson17@gmail.com',
    status: 'Archived',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'carmenmwilson17@gmail.com',
          id: '7d2ebff3-3ece-494f-bd28-b1c44e3a182e',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-06-08T05:29:37+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Carmen',
      familyName: 'Wilson',
      fullName: 'Carmen Wilson',
      displayName: 'carmenw'
    },
    email: 'carmen.wilson@yale.edu',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/0aad3680a13185d415eef16efbf799a8.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0024-48.png',
    services: {
      slack: {
        id: 'U0PE17N10',
        email: 'carmen.wilson@yale.edu',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0PE17N10',
        email: 'carmen.wilson@yale.edu'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Wyatt',
      familyName: 'Winnie',
      fullName: 'Wyatt Winnie',
      displayName: 'tombstone'
    },
    email: 'askwyatt@outlook.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/c7984439618d0a09ac4d97b64efd0a3a.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0017-48.png',
    services: {
      slack: {
        id: 'U0SNG3D7F',
        email: 'askwyatt@outlook.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0SNG3D7F',
        email: 'askwyatt@outlook.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Megan',
      familyName: 'Wolfe',
      fullName: 'Megan Wolfe',
      displayName: 'Megan Wolfe'
    },
    email: 'meganw@egjpress.org',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2018-04-04/340600007792_b74489a397f7a9c050bd_original.jpg',
    dataSources: {
      google: {
        id: '113973294175205039018',
        emails: [
          {
            address: 'meganw@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U9Y2EB64U',
        email: 'meganw@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U9Y2EB64U',
        email: 'meganw@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-03-29T09:56:02Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'meganw'
  },
  {
    name: {
      givenName: 'Megan S',
      familyName: 'Wolfe',
      fullName: 'Megan S Wolfe',
      displayName: 'Megan Wolfe'
    },
    email: 'info@meganwolfephoto.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'info@meganwolfephoto.com',
          id: '3982db1b-68ee-4348-a8c3-ede89644096e',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-03-21T23:04:40+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Owen S',
      familyName: 'Woods',
      fullName: 'Owen S Woods',
      displayName: 'Owen Woods'
    },
    email: 'owenwoods692@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'owenwoods692@gmail.com',
          id: 'ce5819cf-1607-4d15-b37a-b75bf3c25c3f',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2018-11-09T19:04:57+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Owen',
      familyName: 'Woods',
      fullName: 'Owen Woods',
      displayName: 'Owen Woods'
    },
    email: 'owen@egjpress.org',
    status: 'Disabled',
    photoUrl: null,
    dataSources: {
      google: {
        id: '113356743770340935386',
        emails: [
          {
            address: 'owen@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'UER56K6F8',
        email: 'owen@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'UER56K6F8',
        email: 'owen@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-12-10T12:47:30Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'owen'
  },
  {
    name: {
      givenName: 'Haley N',
      familyName: 'Wooning',
      fullName: 'Haley N Wooning',
      displayName: 'Haley Wooning'
    },
    email: 'hwooning19@gmail.com',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'hwooning19@gmail.com',
          id: '3d2401f8-bf5a-4314-95a0-38bb24eefb98',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-10-23T16:36:43+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Haley ',
      familyName: 'Wooning',
      fullName: 'Haley Wooning',
      displayName: 'Haley Wooning'
    },
    email: 'haley@egjpress.org',
    status: 'Disabled',
    photoUrl:
      'https://avatars.slack-edge.com/2018-03-29/339528596183_a4ce3c48be0f41dd0394_original.jpg',
    dataSources: {
      google: {
        id: '101180594714248141704',
        emails: [
          {
            address: 'haley@egjpress.org',
            primary: true
          }
        ],
        thumbnailPhotoUrl: null
      },
      slack: {
        id: 'U9XA22NBE',
        email: 'haley@egjpress.org'
      }
    },
    services: {
      gmail: {
        enabled: true
      },
      slack: {
        id: 'U9XA22NBE',
        email: 'haley@egjpress.org',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    isDeleted: false,
    joinDate: '2018-03-28T08:46:50Z',
    orgRoles: {
      foundation: [
        {
          name: 'Volunteer',
          primary: true
        }
      ],
      press: []
    },
    displayName: 'Haley'
  },
  {
    name: {
      givenName: 'Alizabeth',
      familyName: 'Worley',
      fullName: 'Alizabeth Worley',
      displayName: 'alizabeth'
    },
    email: 'alizabeth.worley@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/76d5f4a59963cffa67ac642f587f6211.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0021-48.png',
    services: {
      slack: {
        id: 'U0B4ZL0LB',
        email: 'alizabeth.worley@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0B4ZL0LB',
        email: 'alizabeth.worley@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Jo',
      familyName: 'Wu',
      fullName: 'Jo Wu',
      displayName: 'authoressjo'
    },
    email: 'authoressjo@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/d57b1005cb0aa4a07251167792baeb6a.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0002-48.png',
    services: {
      slack: {
        id: 'U0386M44C',
        email: 'authoressjo@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0386M44C',
        email: 'authoressjo@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Alice',
      familyName: 'Xu',
      fullName: 'Alice Xu',
      displayName: 'alice'
    },
    email: 'souleaux@hotmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/7ab0c92f9e83e8c6aae24647a4d00ceb.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0025-48.png',
    services: {
      slack: {
        id: 'U0F2625QT',
        email: 'souleaux@hotmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0F2625QT',
        email: 'souleaux@hotmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Audrey',
      familyName: 'Yang',
      fullName: 'Audrey Yang',
      displayName: 'audreywau'
    },
    email: 'audreyyang14@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/7a5c7aa43a8e8f433adad93a05db23ab.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0014-48.png',
    services: {
      slack: {
        id: 'U66PK7LBW',
        email: 'audreyyang14@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U66PK7LBW',
        email: 'audreyyang14@gmail.com'
      },
      submittable: {
        personal: {
          email: 'audreyyang14@gmail.com',
          id: '63cdb82e-ce3e-464c-b646-539e4bb6a0eb',
          application: 8081040
        }
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    },
    appliedDate: '2017-06-25T09:10:30+00:00'
  },
  {
    name: {
      givenName: 'Soo Young',
      familyName: 'Yun',
      fullName: 'Soo Young Yun',
      displayName: 'Soo Young Yun'
    },
    email: 'syun2018@chadwickschool.org',
    status: 'Applied',
    photoUrl: null,
    dataSources: {
      submittable: {
        personal: {
          email: 'syun2018@chadwickschool.org',
          id: 'ca500b5b-9dde-4f09-9302-99f0e452c8be',
          application: null
        }
      }
    },
    isDeleted: false,
    appliedDate: '2017-10-09T13:16:13+00:00',
    orgRoles: {
      foundation: [
        {
          name: 'Applied',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Jennifer',
      familyName: 'Zeller',
      fullName: 'Jennifer Zeller',
      displayName: 'jnzeller'
    },
    email: 'jnzeller@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/dd797637e928eebb52fa618d22369655.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0015-48.png',
    services: {
      slack: {
        id: 'U0377DF2W',
        email: 'jnzeller@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U0377DF2W',
        email: 'jnzeller@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  },
  {
    name: {
      givenName: 'Anna',
      familyName: 'Zumbro',
      fullName: 'Anna Zumbro',
      displayName: 'annazumbro'
    },
    email: 'annazumbro@gmail.com',
    status: 'Disabled',
    photoUrl:
      'https://secure.gravatar.com/avatar/c01c3082ce4442d6f49f84146fd5f4ed.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0017-48.png',
    services: {
      slack: {
        id: 'U039PD3MK',
        email: 'annazumbro@gmail.com',
        enabled: false,
        team: 'T036YRMDH'
      }
    },
    dataSources: {
      slack: {
        id: 'U039PD3MK',
        email: 'annazumbro@gmail.com'
      }
    },
    isDeleted: true,
    orgRoles: {
      foundation: [
        {
          name: 'Guest Staff',
          primary: true
        }
      ]
    }
  }
];

export default Staff;
