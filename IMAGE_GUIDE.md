# Image Guide for Your Portfolio Website

This guide explains how to add images to your portfolio website.

## Image Directory Structure

All images should be placed in the `public/images` directory. The structure is as follows:

```
public/
  └── images/
      ├── projects/
      │   ├── project1/
      │   ├── project2/
      │   └── project3/
      └── profile/
```

## Recommended Image Sizes

- **Hero Images**: 1200 x 600px (16:9 ratio)
- **Process Diagrams**: 600 x 400px
- **Gallery Images**: 400 x 300px
- **Profile Photo**: 400 x 400px (1:1 ratio)

## How to Add Images to Your Projects

### Step 1: Prepare Your Images

1. Optimize your images for web (compress them to reduce file size)
2. Name your images descriptively (e.g., `project1-hero.jpg`, `project1-testing1.jpg`)
3. Use JPG for photos and PNG for diagrams or images with transparency

### Step 2: Upload Images to the Public Directory

Place your images in the appropriate folder:
- `/public/images/projects/project1/` for Project 1
- `/public/images/projects/project2/` for Project 2
- `/public/images/projects/project3/` for Project 3

### Step 3: Update the Image References in Code

In each project file (e.g., `app/projects/project1/page.tsx`), find the commented Image components and uncomment them. Update the `src` attribute to point to your image.

Example:
```jsx
{/* Before */}
{/* <Image 
  src="/images/projects/project1-hero.jpg" 
  alt="Digital learning platform research hero image" 
  fill
  style={{ objectFit: 'cover' }}
  priority
/> */}

{/* After */}
<Image 
  src="/images/projects/project1/hero.jpg" 
  alt="Digital learning platform research hero image" 
  fill
  style={{ objectFit: 'cover' }}
  priority
/>
```

## Image Component Properties

- `src`: Path to your image (starting from the public directory)
- `alt`: Alternative text for accessibility
- `fill`: Makes the image fill its parent container
- `style={{ objectFit: 'cover' }}`: Controls how the image fits in its container
  - `'cover'`: Scales the image to cover the entire container
  - `'contain'`: Scales the image to fit within the container
- `priority`: Use for important above-the-fold images to improve loading performance

## Tips for Better Image Performance

1. Always compress your images before uploading
2. Use modern formats like WebP when possible
3. Provide descriptive alt text for accessibility
4. Only use `priority` for the most important images
5. Consider using responsive images for different screen sizes

## Adding a Profile Photo

To add your profile photo to the homepage:

1. Place your profile photo in `/public/images/profile/`
2. Update the homepage component to include your photo

## Need Help?

If you need assistance with image optimization or implementation, there are many online tools available:
- [TinyPNG](https://tinypng.com/) for image compression
- [Squoosh](https://squoosh.app/) for advanced image optimization
- [Canva](https://www.canva.com/) for creating diagrams and visuals 