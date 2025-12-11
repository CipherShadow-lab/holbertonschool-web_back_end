#!/usr/bin/env python3
""" PyMongo Find """

import pymongo


def schools_by_topic(mongo_collection, topic):
    """ Function returns list of schools based on specific topic """
    return [i for i in mongo_collection.find({"topics": topic})]
