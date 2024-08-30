// 实现一个infiniteScroll

function infiniteScroll() {
    const [listData,setListData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(() => {

    });

    const handleScroll = useCallback(() => {
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const threhold = 20;
        const distance = scrollHeight - windowHeight - scrollY;
        if (distance <= threhold ) {
            fetchData()
        }
    });


    return <div>
        <div className="list-wrapper">
            {
                listData.map((item) => 
                    <div>{item.text}</div>
                )
            }
        </div>
    </div>
}