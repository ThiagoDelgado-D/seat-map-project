import { MaybePromise } from "@/types";

export interface DefaultProps {
    /**
     * The class name of the component.
     */
    className?: string;

    /**
     * The click handler of the component.
     */
    onClick?: () => MaybePromise<void>;

    /**
     * The mouse enter handler of the component.
     */
    onMouseEnter?: () => MaybePromise<void>;

    /**
     * The mouse leave handler of the component.
     */
    onMouseLeave?: () => MaybePromise<void>;
}
