# GIT executable bit

Scripts residing in GIT that need to be executed on Jenkins will need to have the execute permission bit enabled.

To correct a file already checked into git:

Fix executable bit in GIT
```bash
$ git update-index --chmod=+x file_that_needs_execute_permission
$ git add file_that_needs_execute_permission
$ git commit -m "update file permission"
```

The other alternative is to add a line to your Jenkins build script to mark a file as executable after it has been checked out:

chmod in the build script
```bash
chmod +x file_that_needs_execute_permission
./file_that_needs_execute_permission
```