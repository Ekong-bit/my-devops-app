pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Ekong-bit/my-devops-app.git', branch: 'main'
            }
        }
        stage('Build') {
            steps {
                sh 'node --version'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'node index.js & sleep 5; curl http://localhost:3000'
            }
        }
    }
}