import React from "react";

interface ExampleProps {
    children: ExampleContent | ExampleContent[];
    left?: boolean;
}

interface ExampleContent {
    p: string;
    f: string;
    e: string;
    incorrect?: boolean;
}

const withX = (incorrect: boolean | undefined, text: string): string => {
    return incorrect ? `❌ ${text}` : text; 
}

const Example = (props: ExampleProps) => {
    if (Array.isArray(props.children)) {
        return (
            <>
                {props.children.map((ex, i) => (
                    <Example key={i}>{ex}</Example>
                ))}
            </>
        );
    }
    return (
        <div className={props.left ? "text-left" : "text-center"}>
            <div dir="rtl">
                {withX(props.children.incorrect, props.children.p)}
            </div>
            <div dir="ltr">
                {withX(props.children.incorrect, props.children.f)}
            </div>
            {props.children.e &&
                <div dir="ltr">
                    "{props.children.e}"
                </div>
            }
        </div>
    );
};

export default Example;
