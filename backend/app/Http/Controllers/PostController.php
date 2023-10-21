<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Comment;
use Illuminate\Http\Request;

class PostController extends Controller
{

    public function getAllPosts()
    {
        $posts = Post::with('user')->get();
        return response()->json($posts);
    }
    
    public function index()
    {
        $posts = Post::all();

        // Pass the users data to the view
        return view('dashboard.post' ,  compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = Post::with(['user', 'comment.user'])->find($id);
return response()->JSON($post);

    }
    public function comment(Request $request)
    {
        $request->validate([
            'text' => 'required|string|max:255',
        ]);
        Comment::create([
            'user_id' => $request->userId, // Replace 'field1' with your actual field name and 'value1' with the value you want to insert.
            'post_id' => $request->postId,
            'text' => $request->text,

        ]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\HttpRequest  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        Post::find($id)->delete();
        Post::destroy($id);
        return redirect('postdash')->with('flash_message', 'Post deleted successfully');
    }
}
