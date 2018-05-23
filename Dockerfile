FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
ADD Pipfile /code/
RUN pip install pipenv
RUN pipenv --three
RUN pipenv install
ADD ./src /code/


