# Generated by Django 4.2.5 on 2023-11-10 10:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_fullprocess_finalstudentacc_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='fullprocess',
            name='imputerMethod',
            field=models.CharField(default='EM', max_length=200),
        ),
    ]
