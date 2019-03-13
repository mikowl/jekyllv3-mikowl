---
layout: post
title:  "Setting up Jekyll 3.8.5 on macOS"
date:   2019-03-12
tags: jekyll update
---

It's been a decade or two since I've updated my website so what better way to update my website by writing an article about updating my website. 

I ran into a few snags trying to install Jekyll 3.8.5 on macOS Mojave so I thought I'd document what ended up working in case anyone else is running into the same issues. This post is geared towards non ruby people who are currently using or are interested in using the latest version of [jekyll](https://jekyllrb.com/) for their website.

### Use a ruby version management tool

You might run into some permission issues if you're using the ruby version Mojave ships with in `/Library/Ruby/Gems/2.3.0/`. We want to avoid using sudo whenever possible, I prefer [rbenv](https://github.com/rbenv/rbenv) because it's lightweight, simple, and I've just never had any issues with it. You can easily switch versions of ruby to suit your needs.

**Install rbenv with homebrew**

`brew install rbenv`

Once you have rbenv installed, you can then install the latestish version of Ruby:

`rbenv install 2.6.1` (*note: **this can take a while, the first time running this I thought it had froze but I just had to put my patient pants on**)

Then set your ruby version with the following command:

`rbenv global 2.6.1`

Restart terminal and type `ruby -v`, you should see something like:

{% highlight bash %}
ruby 2.6.1p33 (2019-01-30 revision 66950)
{% endhighlight %}

**Now we're ready to install jekyll!**

`gem install bundler jekyll` 

### Make sure you're on the right path

If you use [Oh My Zsh][omz] you can simply add bundler and rbenv into your plugins array.

{% highlight bash %}
plugins=(
  brew bundler rbenv
)
{% endhighlight %}

 This should automatically get the correct paths into your shell. Otherwise make sure your path is set in your .bash_profile/.bashrc/whatever file (i.e. `export PATH="$HOME/.rbenv/bin:$PATH"`), optionally you can add `eval "$(rbenv init -)"` which will add autocomplation ([among other things](https://github.com/rbenv/rbenv#how-rbenv-hooks-into-your-shell)).

### Let's start a new site!

{% highlight bash %}
$ jekyll new tony-danza-fanclub-site
$ cd tony-danza-fanclub-site
$ bundle exec jekyll serve
{% endhighlight %}

You should now be able to see your site at [http://localhost:4000](localhost:4000)

<figure>
  <img src="/images/tonydanzafansite.jpg" alt="Morgan Freeman Holding Cotton Candy">
  <figcaption>Great success!</figcaption>
</figure>

### Troubleshooting common errors

* If your installation is in a wonky loop run `gem install bundler` (in a folder that outside of your project that doesn't have a gemfile)
* Then run `bundle install` in your website's directory to make sure you have all latest dependencies

### Hosting

I recently moved my site to [Netlify](https://www.netlify.com/) because it makes setting up a continuous deployment process pretty painless. When I push my site to github it automatically deploys the updates to the server. It works flawlessly and it's great not having to fiddle around with a continuous integration service or complex rakefile to handle the deployment.

[omz]: https://github.com/robbyrussell/oh-my-zsh