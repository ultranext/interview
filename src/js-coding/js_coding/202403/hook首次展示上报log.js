/**
 * 标题
自定义hook，元素首次在视图中展示，上报一个log

题目描述
function useViewReport(...) {​
console.log('in viewport');​
return ...​
}​

function isInViewPort(node: DOMNode) {​
// return boolean​
}​​​
 */

function useViewReport() {
    const flag = useRef(false);

}

function useInViewPort(node) {
    const [isInView, setIsInView] = useState(false);
    useEffect(() => {
        const Oberver = new IntersectionObserver((entries) => {
            const entry = entries[0]
            if (entry.isIntersecting) {
                console.log('in viewport');
                setIsInView(true);
                Oberver.unobserve(entry.target);
            } else {
                setIsInView(false);
            }
        })
        Oberver.observe(node);
    }, []);
    return isInView;
}