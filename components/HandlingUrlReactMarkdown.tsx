import ReactMarkdown from "react-markdown";
import Link from "next/link";

export const HandlingUrlReactMarkdown = ({children, id} : {children: string, id: number}) => {
    return (
        <ReactMarkdown
            components={{
                a: ({href, ...props}) => {
                    if(!href){
                        return <a {...props}></a>
                    }
                    return (
                        <Link href={href}>
                            <a {...props}></a>
                        </Link>
                    );
                },
            }}
        >
            {children}
        </ReactMarkdown>
    )
}