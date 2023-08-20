// Copyright (c) 2023, Amresh and contributors
// For license information, please see license.txt

frappe.ui.form.on("Airline", {
    refresh(frm) {
        let targetLink = document.querySelector(`a[href='/${frm.doc.route}']`);
        if (targetLink) {
            targetLink.href = frm.doc.website;
        }
    },
});
