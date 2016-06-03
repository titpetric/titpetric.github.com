## Let's get specific

### Resource usage: disk

<div class="bar red">Virtual Machine: ~10GB - 100GB (OS only, low data)</div>

<div class="bar green">Docker Image: ~10MB - 100MB - 1GB (Image size, no data)</div>

* Docker: True dynamically expanding data (not virtual size of FS)
* Image layers: "base" images can be reused
* Docker: 1 Application*, VM: 1 Operating system
