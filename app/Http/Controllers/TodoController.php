<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $lists = DB::table('todos')->orderBy('created_at', 'desc')->get();
        $date = DB::table('todos')->get('created_at');
        // return Carbon::createFromFormat('d/m/Y', $date)->diffForHumans();

        return response()->json([
            'status' => 200,
            'type' => 'Get list',
            'list' => $lists
        ]);
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
        $addTask = DB::table('todos')->insert([
            'title' => $request->taskTitle,
            'description' => $request->taskDescription,
            'created_at' => DB::raw('CURRENT_TIMESTAMP'),
            'user_id' => 1
        ]);

        if($addTask){
            return response()->json([
                'status' => 200,
                'type' => 'Add task',
                'message' => 'Task will be added in a moment.'
            ]);
        }else{
            return response()->json([
                'status' => 400,
                'type' => 'Add task',
                'message' => 'Error adding your task.'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $getTask = DB::table('todos')->where('id', $id)->get();
        return response()->json([
            'status' => 200,
            'type' => 'todo',
            'task' => $getTask
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function edit(Todo $todo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Todo $todo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table('todos')->where('id', $id)->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Task will be deleted in a moment.'
        ]);
    }
}
