# Copyright (c) 2023, Amresh and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document
import random,string, frappe

class AirplaneTicket(Document):

	def before_save(self):
		if self.status != 'Boarded':
			_add_ons  = self.add_ons
			total_amount = self.flight_price
			for item in _add_ons:
				total_amount += item.amount

			self.total_price = total_amount
			# self.seat = str(random.randint(10, 99))+random.choice(string.ascii_uppercase[:5])
		else:
			return
	# def on_update(self):
	# 	self.status = 'Boarded'
	# 	self.save()

	def before_insert(self):
		flight = frappe.get_doc('Airplane Flight', self.flight)
		airplane = frappe.get_doc('Airplane', flight.airplane)

		booking_count = frappe.db.count('Airplane Ticket', {'flight': self.flight})
		if booking_count == airplane.capacity or booking_count > airplane.capacity:
			frappe.throw('Seat not available in this flight. Check another one :)')
		return