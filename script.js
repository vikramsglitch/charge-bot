function getResponse(userInput) {

    const message = userInput.toLowerCase();

    // Charging Initiation
    if (
        message.includes("charging start") ||
        message.includes("charging initiated") ||
        message.includes("charging status") ||
        message.includes("when will my charging")
    ) {
        return `Your charging session is scheduled for 06:30 PM today.

Current Status: Executive Assigned ✅

Estimated Arrival Time: 06:15 PM

You will receive a notification once charging starts.`;
    }

    // Battery Percentage Not Changing
    if (
        message.includes("battery percentage") ||
        message.includes("battery not changing") ||
        message.includes("battery stuck")
    ) {
        return `Let's perform some checks:

• Is the vehicle moving normally?
• Is the speedometer working?
• Is any warning light visible?
• Has the battery percentage remained frozen for more than 10 minutes?

Possible causes:
• Battery Management System (BMS) issue
• Dashboard synchronization problem
• Sensor communication fault

Recommended Action:
Restart the vehicle and schedule a service inspection if the issue persists.`;
    }

    // Executive Delay
    if (
        message.includes("executive") ||
        message.includes("not arrived") ||
        message.includes("late")
    ) {
        return `Current Booking Status:

Executive Assigned ✅
En Route 🚗

Please allow an additional 10 minutes.

If the executive does not arrive within the estimated window, we can escalate the request.`;
    }

    // Slow Charging
    if (
        message.includes("slow charging") ||
        message.includes("charging speed") ||
        message.includes("charging slow")
    ) {
        return `Please verify:

• Battery level above 80%?
• High ambient temperature?
• Battery warning visible?

Possible Reasons:
• Battery thermal protection
• Vehicle charging limitation
• Charger output reduction

Continue monitoring for 10 minutes.`;
    }

    // Vehicle Not Starting
    if (
        message.includes("not turning on") ||
        message.includes("vehicle not starting") ||
        message.includes("car not starting")
    ) {
        return `Please perform the following checks:

• Are dashboard lights visible?
• Is battery percentage visible?
• Is any warning symbol blinking?

Possible Causes:
• Low auxiliary battery
• BMS fault
• Electrical system malfunction

Technical assistance is recommended.`;
    }

    // Battery Warning
    if (
        message.includes("battery warning") ||
        message.includes("warning light") ||
        message.includes("battery light")
    ) {
        return `Please provide:

• Battery percentage
• Vehicle model
• Photo of the warning indicator

Common Causes:
• Battery overheating
• Charging system fault
• Voltage imbalance

Avoid another charging session until diagnosis is completed.`;
    }

    // Charging Stopped
    if (
        message.includes("charging stopped") ||
        message.includes("session stopped") ||
        message.includes("charging interrupted")
    ) {
        return `Possible Reasons:

• Battery reached target charge level
• Safety protection triggered
• Charging connector disconnected
• Temporary power interruption

Please verify connector status and app notifications.`;
    }

    // Connector Issue
    if (
        message.includes("connector") ||
        message.includes("not locking") ||
        message.includes("charging port")
    ) {
        return `Please inspect:

• Dust or debris in charging port
• Connector alignment
• Physical damage

Do not force the connector.

A field technician can inspect the charging equipment.`;
    }

    // Battery Drain
    if (
        message.includes("battery draining") ||
        message.includes("battery drain") ||
        message.includes("battery dropping")
    ) {
        return `Please answer:

• Is AC running continuously?
• Is regenerative braking functioning?
• Any warning lights visible?

Potential Causes:
• Battery degradation
• Tire pressure issues
• High power consumption

A battery health check is recommended.`;
    }

    // Range Issue
    if (
        message.includes("less range") ||
        message.includes("driving range") ||
        message.includes("range reduced")
    ) {
        return `Range reduction can occur due to:

• Extreme weather
• Battery aging
• High-speed driving
• Increased AC usage

Please provide current battery percentage and expected range.`;
    }

    // Noise Issue
    if (
        message.includes("noise") ||
        message.includes("sound") ||
        message.includes("clicking")
    ) {
        return `Please identify:

• Clicking noise?
• Grinding noise?
• Whistling sound?

Check wheel area, braking system and motor compartment.

Avoid long-distance travel until inspection is completed.`;
    }

    // Battery Health
    if (
        message.includes("battery health") ||
        message.includes("battery condition") ||
        message.includes("battery healthy")
    ) {
        return `Battery Health Summary:

State of Health (SOH): 92%
Charge Cycles: 430
Temperature Status: Normal
Performance Status: Healthy

No immediate action required.`;
    }

    return `Sorry, I could not understand your query.

Try asking:

• When will my charging be initiated?
• My charging session stopped automatically
• My battery is draining very fast
• How healthy is my battery?`;
}

function sendMessage() {

    const input = document.getElementById("userInput");
    const chatContainer = document.getElementById("chatContainer");

    const userText = input.value.trim();

    if (userText === "") return;

    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerText = userText;

    chatContainer.appendChild(userMessage);

    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.innerText = "Thinking...";

    chatContainer.appendChild(botMessage);

    setTimeout(() => {
        botMessage.innerText = getResponse(userText);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 800);

    input.value = "";

    chatContainer.scrollTop = chatContainer.scrollHeight;
}

document
.getElementById("userInput")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        sendMessage();
    }
    function fillQuestion(question){

        document.getElementById("userInput").value = question;
        
        }
        document
.getElementById("beforePhoto")
.addEventListener("change", function(event){

const file = event.target.files[0];

if(file){

const preview =
document.getElementById("beforePreview");

preview.src =
URL.createObjectURL(file);

preview.style.display = "block";

}

});


document
.getElementById("afterPhoto")
.addEventListener("change", function(event){

const file = event.target.files[0];

if(file){

const preview =
document.getElementById("afterPreview");

preview.src =
URL.createObjectURL(file);

preview.style.display = "block";

}

});
});
function showTab(tabId, button){

    document.getElementById("customerTab").style.display = "none";
    document.getElementById("executiveTab").style.display = "none";

    document.getElementById(tabId).style.display = "block";

    const buttons =
    document.querySelectorAll(".tab-btn");

    buttons.forEach(btn =>
        btn.classList.remove("active")
    );

    button.classList.add("active");
}
