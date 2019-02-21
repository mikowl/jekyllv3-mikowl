# Simple rakefile for generating new posts
# rake post title="Post title"

require 'date'

desc 'Create a new post.'
task :post do
  title = ENV['title'] or
    abort 'Missing environment variable "title". Example: rake post title="some title"'

  date = DateTime.now

  POST = '_posts/%s-%s.md' % [
    date.strftime( '%F' ),
    title.downcase.split( /\s+/ ).join( '-' ),
  ]

  TEMPLATE = <<-TEMPLATE
---
layout: post
title: #{title}
date: #{Time.new.strftime("%Y-%m-%d")}
comments: true
tags:
---

  TEMPLATE

  File.write( POST, TEMPLATE )
  system(ENV['EDITOR'] || 'vim', POST)
end