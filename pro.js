function generateDocument() {
    let docType = document.getElementById("docType").value;
    let partyA = document.getElementById("partyA").value.trim();
    let partyB = document.getElementById("partyB").value.trim();
    let details = document.getElementById("details").value.trim();
    let resultText = document.getElementById("resultText");

    // Basic Validation
    if (!partyA || !partyB) {
        resultText.innerHTML = "⚠️ Please fill in both Party names.";
        return;
    }

    let generatedTemplate = "";

    // Template selection based on user input
    if (docType === "rental") {
        generatedTemplate = `
            <strong>RENTAL AGREEMENT</strong><br><br>
            This agreement is made between <strong>${partyA}</strong> (Landlord) and <strong>${partyB}</strong> (Tenant).<br><br>
            <strong>Terms & Conditions:</strong><br>
            1. The Landlord agrees to rent out the property to the Tenant.<br>
            2. Additional details: ${details || "Standard 11-month lease terms apply."}<br><br>
            <strong>Signatures:</strong><br>
            Landlord: ____________________ &nbsp;&nbsp;&nbsp;&nbsp; Tenant: ____________________
        `;
    } else if (docType === "nda") {
        generatedTemplate = `
            <strong>NON-DISCLOSURE AGREEMENT (NDA)</strong><br><br>
            This Non-Disclosure Agreement is entered into by <strong>${partyA}</strong> (Disclosing Party) and <strong>${partyB}</strong> (Receiving Party).<br><br>
            <strong>Purpose & Terms:</strong><br>
            The Receiving Party agrees to maintain confidentiality regarding all shared trade secrets and project details.<br>
            Key Terms: ${details || "Confidentiality valid for 2 years."}<br><br>
            <strong>Signatures:</strong><br>
            Disclosing Party: ____________________ &nbsp;&nbsp;&nbsp;&nbsp; Receiving Party: ____________________
        `;
    } else {
        generatedTemplate = `
            <strong>EMPLOYMENT CONTRACT</strong><br><br>
            This contract is made between <strong>${partyA}</strong> (Employer) and <strong>${partyB}</strong> (Employee).<br><br>
            <strong>Details:</strong><br>
            ${details || "Full-time position with standard terms and policies."}<br><br>
            <strong>Signatures:</strong><br>
            Employer: ____________________ &nbsp;&nbsp;&nbsp;&nbsp; Employee: ____________________
        `;
    }

    // Display the generated document
    resultText.innerHTML = generatedTemplate;
}