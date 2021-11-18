### Config

`git config --global user.name "FIRST_NAME LAST_NAME"` - Set Username

`git config --global user.email "MY_NAME@example.com"` - Set email address

`git config --global fetch.prune true` - To configure Git to execute prune for every fetch, execute the following command

`git config --global core.editor editor_name` - Set default editor

### Useful Commands

`git remote -v` - shows url of remote

`git remote set-url origin {remote url}` - sets the remote url 

`git reflog` - shows a log of all recent git actions. good for seeing what branch you were on, or looking for a specific commit to cherry-pick

`git reset --hard origin/mybranch` - resets to origin of branch

`git branch --merged | egrep -v "(^\*|master|dev)" | xargs git branch -d` - Deletes all merged branches

`git branch –merged` : first, you are simply listing all the branches currently merged with your current checked out branch;

`egrep -v “(^*|master|dev)”` : you are using the invert matching feature of grep in order to exclude any branches that may be called “master” or “dev”, just in case;

`xargs git branch -d` : you are deleting every single branch listed before.

### Links

- [Git is my buddy: Effective Git as a solo developer](https://mikkel.ca/blog/git-is-my-buddy-effective-solo-developer/)
- [Git Hooks Tutorial](https://www.digitalocean.com/community/tutorials/how-to-use-git-hooks-to-automate-development-and-deployment-tasks)
- [Git from the bottom up](https://jwiegley.github.io/git-from-the-bottom-up/)
- [Can a Git hook automatically add files to the commit?](https://stackoverflow.com/questions/3284292/can-a-git-hook-automatically-add-files-to-the-commit/12802592#12802592)
