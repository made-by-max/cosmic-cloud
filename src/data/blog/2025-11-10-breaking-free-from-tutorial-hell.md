---
title: Breaking free from tutorial hell
date: 2025-11-10
tags:
  - projects
---
I've probably spent far too long in tutorial hell. I love taking new courses and I'm the kind of person who wants to understand how all the pieces fit together before I start in on something. So I just keep learning about new technologies and not actually building anything. It's a problem, I know.

I've been flying through loads of courses lately (thanks in large part to finally starting meds for my ADHD) and I've decided it's finally time to start building some projects. It was probably time to start ages ago, but here we are.

The idea I came up with is basically a database of adoptable pets for an animal rescue, which lends itself to three separate but related projects where I can experiment with different tech stacks.

## Project #1: The end user site

This first project should hopefully be fairly straightforward. I plan to build a SPA in React where potential adopters can view and filter adoptable pets.

Stretch goals: Create an adoption application form. Add user auth so users can save favorite pets.

## Project #2: CRUD app

The second project will be an interface for rescue staff to add, update, and remove animals from a database. I plan to integrate with Supabase and use a library (most likely TanStack) to create a table interface. I might also use a charting library to add some adoption statistics.

Stretch goal: Add different user types (foster, adoption coordinator, rescue admin) and use Auth0 to implement RBAC and user management.

## Project #3: Marketing site

Finally, I'd like to create a marketing site to advertise the product. This will be more about adding some visual polish. Likely tech stack includes Next.js, Tailwind, and ShadCn.

Stretch goal: Adding animations with Motion.

As part of my objective to learn in public I plan to post regular updates here as I work on these projects.