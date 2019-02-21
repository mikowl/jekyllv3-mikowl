---
layout: post
title:  "Install Jekyll 3 on macOS"
date:   2019-02-20
tags: jekyll update
---
*This is a very rough draft*

I ran into a few snags trying to install Jekyll 3.8.5 on macOS Mojave so I thought I'd document what ended up working in case anyone else is running into the same issues.

### Use rbenv

You might run into some permission issues if you're using the ruby version Mojave ships with in `/Library/Ruby/Gems/2.3.0/`. We want to avoid using sudo, plus rbenv makes it really easy to install and switch between versions of ruby.

**Install rbenv with homebrew**

`brew install rbenv`

Install the latestish version of Ruby:

`rbenv install 2.6.1` (note this can take a while, the first time running this I thought it had froze but I just had to put my patient pants on)

`rbenv global 2.6.1`

Restart terminal and type `ruby -v`, you should see something like:

{% highlight bash %}
ruby 2.6.1p33 (2019-01-30 revision 66950)
{% endhighlight %}

**Now we're ready to install jekyll!**

`bundler exec bundler jekyll`

### Make sure you're on the right path

If you use [Oh My Zsh][omz] you can simply add bundler and rbenv into your plugins array.

{% highlight bash %}
plugins=(
  brew bundler rbenv
)
{% endhighlight %}

 This should automatically get the correct paths into your shell. Otherwise you'll need to be sure and add the path to your .bash_profile/.bashrc/whatever file (i.e. `export PATH="$HOME/.rbenv/bin:$PATH"`), optionally you can add `eval "$(rbenv init -)"` which will add autocomplation ([among other things](https://github.com/rbenv/rbenv#how-rbenv-hooks-into-your-shell)).

[omz]: https://github.com/robbyrussell/oh-my-zsh