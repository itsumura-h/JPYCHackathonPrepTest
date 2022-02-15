import { Button } from "@chakra-ui/react";
import { ReactNode, useCallback } from "react";
import { useQuizContext } from "./QuizContextProvider";
import { CheckIcon } from "@chakra-ui/icons";

export default function QuizSelectionButton({
    children,
    isActive = false,
    selectionID,
    questionID,
}: {
    children: ReactNode,
    isActive?: boolean,
    selectionID: string,
    questionID: number,
}) {
    const {
        setAnswer,
        currentQuestionID,
        previousQuestionID,
        setCurrentQuestionID,
        questionSize,
    } = useQuizContext();
    const onClick = useCallback(() => {
        setAnswer({ selectionID, questionID });

        // Intentioanlly delay the operation
        setTimeout(() => {
            if (previousQuestionID === questionSize + 1) {
                setCurrentQuestionID(previousQuestionID);
            } else {
                setCurrentQuestionID(currentQuestionID + 1);
            }
        }, 700);
    }, [
        selectionID,
        questionID,
        setCurrentQuestionID,
        currentQuestionID,
        setAnswer,
        previousQuestionID
    ]);

    return (
        <Button
            size="lg"
            height="52px"
            fontSize="3xl"
            fontWeight="semibold"
            variant="outline"
            borderWidth={4}
            borderColor="#2B71AF"
            bg="#ffffff"
            color="#2B71AF"
            isActive={isActive}
            leftIcon={isActive ? <CheckIcon /> : undefined}
            _hover={{
                bg: "#d5deeb",
                borderColor: "#1C609F",
                color: "#1C609F",
            }}
            _active={{
                bg: "#c3d2e8",
                borderColor: "#1c5f9e",
                color: "#1c5f9e"
            }}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}