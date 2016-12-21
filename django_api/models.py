import random
import uuid

from django.db import models


class CreateManage(models.Manager):
    def create_world(self, count):
        for i in range(count):
            uuid1 = uuid.uuid1()
            random1 = random.randint(1, 10000)
            random2 = random.randint(1, 10000)
            uuid2 = uuid.uuid3(uuid1, str(random1))
            if_half = True if random.random() >= 0.5 else False
            self.create(aa=uuid1, bb=uuid2, cc=random1, dd=random2, ee=if_half)


class Abc(models.Model):
    aa = models.CharField(null=True, blank=True, max_length=255)
    bb = models.CharField(null=True, blank=True, max_length=255)
    cc = models.IntegerField(blank=True)
    dd = models.IntegerField(blank=True)
    ee = models.BooleanField(default=False)
    create_time = models.DateTimeField(auto_now_add=True)
    update_time = models.DateTimeField(auto_now=True)
    objects = CreateManage()
