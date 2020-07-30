# Vue + Django + ButterCMS

### Installation steps

Run two terminals...

#### In the 1st terminal, run front-end
```
cd frontend
npm install
npm run serve
```

#### In the 2nd terminal, run back-end
```
virtualenv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
