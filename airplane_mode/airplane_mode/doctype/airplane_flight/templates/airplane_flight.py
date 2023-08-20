import random
import frappe

def get_context(context):
    context.random_price = str(random.randint(1000, 9999))
    return context
