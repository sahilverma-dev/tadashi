const fakePostData = [
  {
    id: "7548d605-22eb-4d5f-b592-cffbaacff1f5",
    user: {
      name: "Jay George",
      profilePic: "https://randomuser.me/api/portraits/med/men/69.jpg",
      username: "organiccat830",
    },
    caption: "organiccat830",
    likes: 41330,
    collection: true,
    isVideo: false,
    postImage:
      "https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&w=1000&q=80",
  },
  {
    id: "a18772e0-20eb-4ec3-98e7-61d699ac7783",
    user: {
      name: "Heather Young",
      profilePic: "https://randomuser.me/api/portraits/med/women/33.jpg",
      username: "orangerabbit767",
    },
    caption: "orangerabbit767",
    likes: 95162,
    collection: false,
    isVideo: false,
    postImage:
      "https://images.unsplash.com/photo-1640622308113-ca5d7b948515?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "d6a32ddf-ddee-44d2-a07d-756625aabce6",
    user: {
      name: "Clarissa Quast",
      profilePic: "https://randomuser.me/api/portraits/med/women/59.jpg",
      username: "crazygorilla401",
    },
    caption: "crazygorilla401",
    likes: 8269,
    collection: false,
    isVideo: true,
    postImage:
      "https://images.unsplash.com/photo-1647869350163-002b8cd41443?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&w=1000&q=80",
  },
  {
    id: "65ae9424-2042-4a23-ac02-4fb474a08911",
    user: {
      name: "Niilo Couri",
      profilePic: "https://randomuser.me/api/portraits/med/men/53.jpg",
      username: "orangemouse304",
    },
    caption: "orangemouse304",
    likes: 92015,
    collection: true,
    isVideo: true,
    postImage:
      "https://images.unsplash.com/photo-1647973529307-a29a4f784a7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&w=1000&q=80",
  },
  {
    id: "ffad00fd-48a3-4b58-a89f-f37e41e3d36d",
    user: {
      name: "Joona Remes",
      profilePic: "https://randomuser.me/api/portraits/med/men/94.jpg",
      username: "happypanda899",
    },
    caption: "happypanda899",
    likes: 32832,
    collection: true,
    isVideo: false,
    postImage:
      "https://images.unsplash.com/photo-1647969544231-bb6c30c6ef25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&w=1000&q=80",
  },
  {
    id: "766caa40-1f92-457a-b782-6be48f621f2f",
    user: {
      name: "Suzanne Guerin",
      profilePic: "https://randomuser.me/api/portraits/med/women/25.jpg",
      username: "whitezebra927",
    },
    caption: "whitezebra927",
    likes: 62770,
    collection: false,
    isVideo: false,
    postImage:
      "https://images.unsplash.com/photo-1647964147585-623a38bfae15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&w=1000&q=80",
  },
  {
    id: "fbf57124-bd38-4e6e-b93a-af547a15259e",
    user: {
      name: "Frank-Michael Freier",
      profilePic: "https://randomuser.me/api/portraits/med/men/5.jpg",
      username: "happypeacock601",
    },
    caption: "happypeacock601",
    likes: 8196,
    collection: true,
    isVideo: true,
    postImage:
      "https://images.unsplash.com/photo-1639133083099-0bb40a1796e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "ca42dd91-4eef-43ac-bf94-6c19aaa3ed97",
    user: {
      name: "Davut Eronat",
      profilePic: "https://randomuser.me/api/portraits/med/men/15.jpg",
      username: "goldengorilla608",
    },
    caption: "goldengorilla608",
    likes: 21573,
    collection: false,
    isVideo: false,
    postImage:
      "https://images.unsplash.com/photo-1648001979170-4bd16d453d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "43eb4df8-72ce-4ac9-966c-8df0389db3a1",
    user: {
      name: "Gary Arnold",
      profilePic: "https://randomuser.me/api/portraits/med/men/73.jpg",
      username: "tinybird240",
    },
    caption: "tinybird240",
    likes: 96583,
    collection: true,
    isVideo: true,
    postImage:
      "https://images.unsplash.com/photo-1629264422348-4437c4849179?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "c1353732-e046-4e37-9049-be3b99725695",
    user: {
      name: "Mercedes Cruz",
      profilePic: "https://randomuser.me/api/portraits/med/women/90.jpg",
      username: "heavygoose236",
    },
    caption: "heavygoose236",
    likes: 66324,
    collection: true,
    isVideo: false,
    postImage:
      "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "e4a3f938-d4da-4cb4-a67d-d005086c2a89",
    user: {
      name: "Justine Blanc",
      profilePic: "https://randomuser.me/api/portraits/med/women/5.jpg",
      username: "blackzebra188",
    },
    caption: "blackzebra188",
    likes: 43574,
    collection: true,
    isVideo: false,
    postImage:
      "https://images.unsplash.com/photo-1647886281310-363c955a5cf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "a877346e-a3bd-42a0-865a-74c9766752c4",
    user: {
      name: "یلدا مرادی",
      profilePic: "https://randomuser.me/api/portraits/med/women/5.jpg",
      username: "whitegorilla251",
    },
    caption: "whitegorilla251",
    likes: 43442,
    collection: true,
    isVideo: true,
    postImage:
      "https://images.unsplash.com/photo-1647890288511-4792d8168057?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "eb5c5555-bffa-4555-942c-055923b71d6a",
    user: {
      name: "Lino Bourgeois",
      profilePic: "https://randomuser.me/api/portraits/med/men/92.jpg",
      username: "greenmouse500",
    },
    caption: "greenmouse500",
    likes: 74888,
    collection: false,
    isVideo: true,
    postImage:
      "https://images.unsplash.com/photo-1647900771525-a4ae9ad20280?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "5c089fdb-0b02-4f12-807e-271e114a1d37",
    user: {
      name: "Marcus Poulsen",
      profilePic: "https://randomuser.me/api/portraits/med/men/26.jpg",
      username: "greenkoala768",
    },
    caption: "greenkoala768",
    likes: 90335,
    collection: true,
    isVideo: false,
    postImage:
      "https://images.unsplash.com/photo-1644982647844-5ee1bdc5b114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "83bf8542-4b1f-4a96-b6c6-303f11bc1e97",
    user: {
      name: "Özsu Okur",
      profilePic: "https://randomuser.me/api/portraits/med/women/51.jpg",
      username: "brownfrog754",
    },
    caption: "brownfrog754",
    likes: 21011,
    collection: false,
    isVideo: true,
    postImage:
      "https://images.unsplash.com/photo-1647980160534-fb6ed69c33b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "cbb4584f-8abf-46b8-b379-f7bca839bdfa",
    user: {
      name: "Alejandra Gallego",
      profilePic: "https://randomuser.me/api/portraits/med/women/37.jpg",
      username: "blackrabbit403",
    },
    caption: "blackrabbit403",
    likes: 35055,
    collection: false,
    isVideo: true,
    postImage:
      "https://images.unsplash.com/photo-1648019810918-30d146f51e34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "849a2348-6740-464e-a2d9-0431dab7261a",
    user: {
      name: "Adrian Simpson",
      profilePic: "https://randomuser.me/api/portraits/med/men/45.jpg",
      username: "yellowladybug215",
    },
    caption: "yellowladybug215",
    likes: 9482,
    collection: false,
    isVideo: false,
    postImage:
      "https://images.unsplash.com/photo-1647967527244-8716fbadf339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "ac652131-9137-4f8a-890f-b86c1f5a786e",
    user: {
      name: "Aino Toivonen",
      profilePic: "https://randomuser.me/api/portraits/med/women/50.jpg",
      username: "heavygorilla459",
    },
    caption: "heavygorilla459",
    likes: 26794,
    collection: false,
    isVideo: true,
    postImage:
      "https://images.unsplash.com/photo-1647993355135-a067de51144e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "985ac906-49df-4800-a391-759cdf539de4",
    user: {
      name: "Eeli Luoma",
      profilePic: "https://randomuser.me/api/portraits/med/men/28.jpg",
      username: "beautifulbear535",
    },
    caption: "beautifulbear535",
    likes: 53732,
    collection: false,
    isVideo: true,
    postImage:
      "https://images.unsplash.com/photo-1647971199407-4281b0a1ab33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "1d9a4f76-0b35-47b8-a460-441361ade19e",
    user: {
      name: "سهیل رضایی",
      profilePic: "https://randomuser.me/api/portraits/med/men/77.jpg",
      username: "blackpeacock191",
    },
    caption: "blackpeacock191",
    likes: 61623,
    collection: false,
    isVideo: false,
    postImage:
      "https://images.unsplash.com/photo-1647960611692-39bb707eacf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "31a0ecda-854c-4c80-876d-8e6dc35b5684",
    user: {
      name: "Reiner Lippert",
      profilePic: "https://randomuser.me/api/portraits/med/men/25.jpg",
      username: "ticklishpeacock763",
    },
    caption: "ticklishpeacock763",
    likes: 18607,
    collection: false,
    isVideo: true,
    postImage:
      "https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "671bef2a-2703-46e3-bf6b-04919c47b2fa",
    user: {
      name: "Belen Diez",
      profilePic: "https://randomuser.me/api/portraits/med/women/51.jpg",
      username: "orangebutterfly394",
    },
    caption: "orangebutterfly394",
    likes: 52655,
    collection: true,
    isVideo: false,
    postImage:
      "https://images.unsplash.com/photo-1648021967164-2288c0996bd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "3d8e2c52-2633-4b03-9888-74e6c2723bea",
    user: {
      name: "Meghan George",
      profilePic: "https://randomuser.me/api/portraits/med/women/31.jpg",
      username: "goldenpanda587",
    },
    caption: "goldenpanda587",
    likes: 48799,
    collection: true,
    isVideo: true,
    postImage:
      "https://images.unsplash.com/photo-1647998681311-390a8474174c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "81950d9d-3141-42bc-b787-a7f728c7457a",
    user: {
      name: "Charlie French",
      profilePic: "https://randomuser.me/api/portraits/med/women/26.jpg",
      username: "orangeswan212",
    },
    caption: "orangeswan212",
    likes: 88006,
    collection: true,
    isVideo: true,
    postImage:
      "https://images.unsplash.com/photo-1640622333314-05b7986f1b35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "c3b39b5f-f2ae-4937-84a3-bbae140573c5",
    user: {
      name: "Coşkun Durak",
      profilePic: "https://randomuser.me/api/portraits/med/men/61.jpg",
      username: "organicleopard605",
    },
    caption: "organicleopard605",
    likes: 98129,
    collection: true,
    isVideo: true,
    postImage:
      "https://images.unsplash.com/photo-1647961302587-aadedd87b8ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "da13ccf1-c229-40e5-b9a4-7daed2e08b96",
    user: {
      name: "Elli Heikkinen",
      profilePic: "https://randomuser.me/api/portraits/med/women/9.jpg",
      username: "beautifulrabbit594",
    },
    caption: "beautifulrabbit594",
    likes: 5889,
    collection: true,
    isVideo: false,
    postImage:
      "https://images.unsplash.com/photo-1647971447454-8093ed0f8e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&w=1000&q=80",
  },
  {
    id: "6ae46a00-3b89-4a48-9df7-1b289056f64c",
    user: {
      name: "August Erichsen",
      profilePic: "https://randomuser.me/api/portraits/med/men/85.jpg",
      username: "ticklishgoose995",
    },
    caption: "ticklishgoose995",
    likes: 29315,
    collection: true,
    isVideo: true,
    postImage:
      "https://images.unsplash.com/photo-1647971971886-ed86af1ced32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&w=1000&q=80",
  },
  {
    id: "5446793d-a004-4c7b-acb9-d2b3e846679d",
    user: {
      name: "Ella Jørgensen",
      profilePic: "https://randomuser.me/api/portraits/med/women/50.jpg",
      username: "redpanda383",
    },
    caption: "redpanda383",
    likes: 50603,
    collection: false,
    isVideo: true,
    postImage:
      "https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&w=1000&q=80",
  },
  {
    id: "484af416-1efe-4b02-b447-199691b26a0e",
    user: {
      name: "Tomothy Jordan",
      profilePic: "https://randomuser.me/api/portraits/med/men/83.jpg",
      username: "orangeleopard336",
    },
    caption: "orangeleopard336",
    likes: 80543,
    collection: false,
    isVideo: false,
    postImage:
      "https://images.unsplash.com/photo-1647987766377-9b888a197369?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&w=1000&q=80",
  },
  {
    id: "1ae5b113-c1e5-4037-a615-822618656114",
    user: {
      name: "Sadhana Koppenol",
      profilePic: "https://randomuser.me/api/portraits/med/women/26.jpg",
      username: "silvergorilla142",
    },
    caption: "silvergorilla142",
    likes: 98070,
    collection: false,
    isVideo: false,
    postImage:
      "https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "fafc6772-8018-416a-8eaf-697201075248",
    user: {
      name: "Anton Paavola",
      profilePic: "https://randomuser.me/api/portraits/med/men/87.jpg",
      username: "sadmeercat467",
    },
    caption: "sadmeercat467",
    likes: 48437,
    collection: false,
    isVideo: true,
    postImage:
      "https://images.unsplash.com/photo-1647985202095-196b372112be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "b9b1fbf9-6e28-4e5c-a072-212398ac285f",
    user: {
      name: "Kaya Kıraç",
      profilePic: "https://randomuser.me/api/portraits/med/men/96.jpg",
      username: "greenpeacock309",
    },
    caption: "greenpeacock309",
    likes: 89674,
    collection: false,
    isVideo: true,
    postImage:
      "https://images.unsplash.com/photo-1647888775727-888a975cdd1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "3583cce8-cde1-4dbb-8349-86171ddde8f3",
    user: {
      name: "Heather Fletcher",
      profilePic: "https://randomuser.me/api/portraits/med/women/9.jpg",
      username: "greendog258",
    },
    caption: "greendog258",
    likes: 29802,
    collection: true,
    isVideo: true,
    postImage:
      "https://images.unsplash.com/photo-1574223380912-31f4a5be0b86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "c226e23b-8d48-4d1e-addc-0631815c985e",
    user: {
      name: "Lucas Christensen",
      profilePic: "https://randomuser.me/api/portraits/med/men/30.jpg",
      username: "lazyostrich356",
    },
    caption: "lazyostrich356",
    likes: 65484,
    collection: false,
    isVideo: false,
    postImage:
      "https://images.unsplash.com/photo-1647885071107-4beb82857b96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "c1c8f645-669c-4b71-8759-1308a40a9bd7",
    user: {
      name: "Malcolm Oomes",
      profilePic: "https://randomuser.me/api/portraits/med/men/76.jpg",
      username: "angrygorilla988",
    },
    caption: "angrygorilla988",
    likes: 66714,
    collection: false,
    isVideo: false,
    postImage:
      "https://images.unsplash.com/photo-1648022386644-6621fd6249ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&w=1000&q=80",
  },
];

export { fakePostData };
