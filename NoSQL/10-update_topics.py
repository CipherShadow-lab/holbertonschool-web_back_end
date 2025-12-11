#!/usr/bin/env python3
""" PyMongo - update_many """

import pymongo


def update_topics(mongo_collection, name, topics):
    """ Function changes all topics of a school doc based on the name """
    mongo_collection.update_many({"name": name}, {$set: {"topics": topics}})
