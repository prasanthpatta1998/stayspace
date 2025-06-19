pipeline {
  agent any

  environment {
    DOCKER_IMAGE = 'prasanth199/stayspace'
  }

  stages {
    stage('Clone Repo') {
      steps {
        git branch: 'main', url: 'https://github.com/prasanthpatta1998/stayspace'
      }
    }

    stage('Install') {
      agent { docker { image 'node:18' } }
      steps {
        sh 'npm install'
      }
    }

    stage('Build React') {
      agent { docker { image 'node:18' } }
      steps {
        sh 'npm run build'
      }
    }

    stage('Docker Build & Push') {
      steps {
        script {
          docker.build("${DOCKER_IMAGE}:${env.BUILD_NUMBER}")
          withDockerRegistry([credentialsId: 'docker-hub-creds', url: '']) {
            sh "docker push ${DOCKER_IMAGE}:${env.BUILD_NUMBER}"
          }
        }
      }
    }
  }
}
