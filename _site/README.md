# Evillious Repository
The code for my Evillious Chronicles guide website. The source branch includes everything written in Jekyll-ese while the live branch contains the live site files; this is because I build my site using a local version of Jekyll.

The steps I use to deploy the live branch are:

- Delete the existing live branch

`git branch -D live`

- Create a new live branch from the source branch

`git checkout -b live`

- Force only the content in the \_site directory to be included in the build.

`git filter-repo --subdirectory-filter _site/ --refs live`

- Checkout a new source branch

`git checkout source`

- Push all changes to GitHub (I usually do this part via GitHub Desktop just out of personal preference)

`git push --all origin`