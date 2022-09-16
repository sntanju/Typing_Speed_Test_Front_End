import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ShowResult = () => {

    const fetchedText = useSelector((state) => state.startingvalue.fetchedText);
    const userText = useSelector((state) => state.startingvalue.userText);
    const size = userText.length;
    let cpm = 0, wpm = 0, accuracy = 0;

    function countCPM() {
        let cpm = 0;
        for(let i = 0; i < size; i++) {
            if(fetchedText.charAt(i) === userText.charAt(i)) cpm++;
        }
        return cpm;
    }

    function countAccuracy() {
        let accuracy = ((cpm * 1.00)/size)*100.0;
        if(isNaN(accuracy)) return 0;
        return accuracy.toFixed(2);
    }

    function countWPM() {
        let i, wpm = 0;
        let userTextString = '';
        let fetchedTextString = '';
        for( i = 0; i < size; i++) {
            if(fetchedText.charAt(i) !== ' ') {
                userTextString = userTextString +userText.charAt(i);
                fetchedTextString =fetchedTextString + fetchedText.charAt(i);
            }
            else{
                if(userTextString === fetchedTextString) wpm++;
                userTextString = '';
                fetchedTextString = '';
            }
        }
        if(userTextString === fetchedTextString && userTextString !== '') wpm++;
        return wpm;
    }

    function handlePracticeAgain () {
        window.location.reload();
    }

    const calculateResult = () => {
            cpm = countCPM();
            accuracy = countAccuracy();
            wpm = countWPM();
            // alert('Results: matched');
            // window.location.reload('./StartTestButton.js');
        }

    return (
        <>
            {calculateResult()} 
            <Card style={{ width: '25rem', backgroundColor: "DarkSlateGrey", color: 'white' }}>
                <Card.Body>
                    <Card.Title> <h2>Result </h2> </Card.Title>
                    <Card.Text> <h4> WPM: {wpm} </h4> </Card.Text>
                    <Card.Text> <h4> CPM: {cpm} </h4> </Card.Text>
                    <Card.Text> <h4>Accuracy: {accuracy}% </h4> </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Button onClick={handlePracticeAgain} style={{ backgroundColor: "black", color: 'white', padding: '15px 50px', border: '1px solid black', boxShadow: '3px 3px 3px gray' }} >
                        <b>Practice Again</b>
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default ShowResult;