/**
 * 实现一个 React 组件 <FakeA> ，来替代 <a> 标签
 */

function FakeA(props: {
    href: string;
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    style?: React.CSSProperties;
    className?: string;
    target?: string;
    rel?: string;
}) {
    return <div style={style}>
        {children}
    </div>
}