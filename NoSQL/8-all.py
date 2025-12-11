#!/usr/bin/env python3
""" PyMongo list all """

import pymongo


def list_all(mongo_collection):
    """ List all documents in a collection """
    if not mongo_collection:
        return []
    return list(mongo_collection.find())
