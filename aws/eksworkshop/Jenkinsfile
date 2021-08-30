pipeline {
  agent {
    kubernetes {
      yaml """
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: golang
    image: golang:1.13
    command:
    - cat
    tty: true
"""
    }
  }
  stages {
    stage('Run tests') {
      steps {
        container('golang') {
          sh 'go test'
        }
      }
    }
    stage('Build') {
        steps {
            container('golang') {
              sh 'go build -o aimee-eksworkshop-app'
              archiveArtifacts "aimeeu-eksworkshop-app"
            }
            
        }
    }
    
  }
}
