// Copyright (c) 2023, Amresh and contributors
// For license information, please see license.txt

frappe.ui.form.on("Airplane Ticket", {
    refresh(frm) {
        frm.add_custom_button(__('Assign Seat'), () => {
            let dialog = new frappe.ui.Dialog({
                title: 'Enter details',
                fields: [
                    {
                        label: 'Seat Number',
                        fieldname: 'seat',
                        fieldtype: 'Data'
                    }
                ],
                size: 'small', // small, large, extra-large
                primary_action_label: 'Assign',
                primary_action(values) {
                    if (!(/^[1-9]\d{1}[A-F]$/.test(values.seat))) {
                        frappe.warn('Pattern mismatch?',
                            'Only 3 characters allowed. First 2 characters should be `numeric` and last character should be between A-F.\n Eg. \n29A\n34C\n33E',
                            () => {
                                // action to perform if Continue is selected
                            },
                            'Continue',
                            true
                        )
                    } else {
                        frm.set_value({
                            seat: values.seat
                        })
                        dialog.hide();
                    }
                }
            }).show();

        }, 'Actions');
    },
});
