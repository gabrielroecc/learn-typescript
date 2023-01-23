function feedback(avaliation) {
    if (typeof avaliation === "number") {
        if (avaliation == 1) {
            console.log("Can we help you with something? Tell us why");
        }
        else if (avaliation == 2) {
            console.log("You feedback was 2. You feedback was 1. Thank you for you feedback! We can help you with something?");
        }
        else if (avaliation == 3) {
            console.log("You feedback was 3.Thank you! Was a pleasure have you feedback!");
        }
        else if (avaliation == 4) {
            console.log("You feedback was 4. Thank you!");
        }
        else if (avaliation == 5) {
            console.log("Wow!! You feedback was 5. Thank you for the feedback!");
        }
        else {
            console.log("Verify if you write a number between 1 and 5");
        }
    }
    else {
        console.log("Are you sure that you won't leave a feedback? Tell us why!");
    }
}
feedback(5);
feedback(4);
feedback(3);
feedback(2);
feedback(1);
feedback(-1);
feedback(false);
