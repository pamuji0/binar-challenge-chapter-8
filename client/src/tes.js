const DUMMY_PLAYER = [
    {
      id: 1,
      username: "bruce",
      email: "bruce@wayneenterprises.com",
      password: "48r4kW!j^#",
      experience: 4290,
      lvl: 98,
    },
    {
      id: 2,
      username: "riko",
      email: "roko.com",
      password: "1",
      experience: 4,
      lvl: 8,
    },
    {
      id: 3,
      username: "rika",
      email: "roao.com",
      password: "1",
      experience: 4,
      lvl: 8,
    },
  ];
  const data="bruce"
  const result=DUMMY_PLAYER.filter((player)=>player.username==data)
  console.log(result)
  console.log(DUMMY_PLAYER)