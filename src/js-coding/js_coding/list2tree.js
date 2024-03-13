const listData = [
    {
        id: 'p0',
        name: '全部'
    },
    {
      id: 'p1',
      name: '美妆',
      pid: 'p0'
    },
    {
      id: 'p1-1',
      pid: 'p1',
      name: '美妆-护肤',
      pid: 'p0'
    },
    {
        id:"p1-2",
        pid: 'p1',
        name: '美妆-美白',
    },
    {
      id:"p2",
      name:"洗护",
      pid: 'p0'
    },
    {
      id:"p2-1",
      pid: 'p2',
      name:"洗护-护肤",
    },
    {
      id:"p2-2",
      pid: 'p2',
      name:"洗护-沐浴"
    },
    {
      id:"p2-2-1",
      pid: 'p2-2',
      name:"洗护-沐浴-男士"
    },
    {
      id:"p2-2-2",
      pid: 'p2-2',
      name:"洗护-沐浴-女士",
    }
  ]


  const result = [{
    
        id: 'p0',
        name: '全部',
        children: [
            {
                id: 'p1',
                name: '美妆',
                pid: 'p0',
                children: [
                    {
                        id: 'p1-1',
                        pid: 'p1',
                        name: '美妆-护肤',
                        pid: 'p0'
                    }
                ]
            },
            {
                id:"p2",
                name:"洗护",
                pid: 'p0',
                children: [
                    {
                        id:"p2-1",
                        pid: 'p2',
                        name:"洗护-护肤",
                    },
                    {
                        id:"p2-2",
                        pid: 'p2',
                        name:"洗护-沐浴",
                        children: [
                            {
                                id:"p2-2-1",
                                pid: 'p2-2',
                                name:"洗护-沐浴-男士"
                            },
                            {
                                id:"p2-2-2",
                                pid: 'p2-2',
                                name:"洗护-沐浴-女士",
                            }
                        ]
                    }
                ]
            }
        ]
    
  }]