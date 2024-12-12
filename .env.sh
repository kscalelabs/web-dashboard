# Specifies a local environment versus production environment.
export ENVIRONMENT='local'

# For AWS
export AWS_DEFAULT_REGION='us-east-1'
export AWS_ACCESS_KEY_ID='test'
export AWS_SECRET_ACCESS_KEY='test'
export AWS_ENDPOINT_URL_S3='http://127.0.0.1:4566'
export AWS_ENDPOINT_URL_DYNAMODB='http://127.0.0.1:4566'

# For letting the frontend know the backend URL.
export VITE_APP_BACKEND_URL='http://127.0.0.1:8080'

# For SMTP
export SMTP_HOST='smtp.gmail.com'
export SMTP_SENDER_EMAIL=''
export SMTP_PASSWORD=''
export SMTP_SENDER_NAME=''
export SMTP_USERNAME=''

# For Github OAuth
export GITHUB_CLIENT_ID=''
export GITHUB_CLIENT_SECRET=''

# For Google OAuth
export GOOGLE_CLIENT_ID=''
export GOOGLE_CLIENT_SECRET=''

# For OnShape
export ONSHAPE_ACCESS_KEY=''
export ONSHAPE_SECRET_KEY=''
