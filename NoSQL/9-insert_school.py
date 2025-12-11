#!/usr/bin/env python3
""" PyMongo Insert """

import pymongo


def insert_school(mongo_collection, **kwargs):
    """ Function inserts new document in collection based on kwargs """
    if len(kwargs) == 0:
        return None
    return mongo_collection.insert(kwargs)
