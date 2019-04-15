
GIT="which git"

${GIT} add --all

${GIT} commit -m $1

${GIT} push -u origin master
