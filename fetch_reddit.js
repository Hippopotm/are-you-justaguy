const fs = require('fs');
const path = require('path');

// Reddit subreddits to fetch from
const subreddits = [
  'AmItheAsshole',
  'relationship_advice', 
  'TwoXChromosomes',
  'AskMen',
  'AskWomen',
  'dating_advice',
  'socialskills',
  'confession',
  'offmychest',
  'TrueOffMyChest'
];

// Function to fetch posts from a subreddit
async function fetchSubredditPosts(subreddit, limit = 100) {
  try {
    console.log(`Fetching ${limit} posts from r/${subreddit}...`);
    
    // Reddit API endpoint for getting hot posts
    const url = `https://www.reddit.com/r/${subreddit}/hot.json?limit=${limit}`;
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'AreYouJustAGuy/1.0 (Educational App)'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.data || !data.data.children) {
      console.log(`No posts found for r/${subreddit}`);
      return [];
    }
    
    // Extract relevant post data
    const posts = data.data.children.map(child => ({
      id: child.data.id,
      title: child.data.title,
      selftext: child.data.selftext,
      author: child.data.author,
      subreddit: child.data.subreddit,
      score: child.data.score,
      num_comments: child.data.num_comments,
      created_utc: child.data.created_utc,
      url: child.data.url,
      permalink: child.data.permalink,
      is_self: child.data.is_self,
      over_18: child.data.over_18
    }));
    
    console.log(`Successfully fetched ${posts.length} posts from r/${subreddit}`);
    return posts;
    
  } catch (error) {
    console.error(`Error fetching posts from r/${subreddit}:`, error.message);
    return [];
  }
}

// Main function to fetch all posts
async function fetchAllPosts() {
  console.log('Starting Reddit posts fetch...');
  console.log(`Target: ${subreddits.length} subreddits, 100 posts each`);
  
  const allPosts = [];
  
  for (const subreddit of subreddits) {
    const posts = await fetchSubredditPosts(subreddit, 100);
    allPosts.push(...posts);
    
    // Add a small delay to be respectful to Reddit's API
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log(`\nTotal posts fetched: ${allPosts.length}`);
  
  // Save to posts_raw.json
  const outputPath = path.join(__dirname, 'posts_raw.json');
  fs.writeFileSync(outputPath, JSON.stringify(allPosts, null, 2));
  
  console.log(`Posts saved to: ${outputPath}`);
  
  // Print summary
  const subredditCounts = {};
  allPosts.forEach(post => {
    subredditCounts[post.subreddit] = (subredditCounts[post.subreddit] || 0) + 1;
  });
  
  console.log('\nPosts per subreddit:');
  Object.entries(subredditCounts).forEach(([sub, count]) => {
    console.log(`  r/${sub}: ${count} posts`);
  });
}

// Run the script
if (require.main === module) {
  fetchAllPosts().catch(console.error);
}

module.exports = { fetchAllPosts, fetchSubredditPosts };
