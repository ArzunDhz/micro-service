import express from 'express';
import { addTodoItem, deleteTodoItem } from '../controller/todoController';
import { getAllTodo } from '../controller/todoController/get-all-todo-controller';
import { updateTodo } from '../controller/todoController/update-todo-controller';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Todo
 *   description: Operations related to managing todo items
 */

/**
 * @swagger
 * /api/v1/add-todo:
 *   post:
 *     tags:
 *       - Todo
 *     summary: Add a new todo item.
 *     description: Add a new todo item to the user's task list.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               task:
 *                 type: string
 *     responses:
 *       200:
 *         description: Todo item added successfully.
 *       500:
 *         description: Internal server error.
 */
router.post('/add-todo', addTodoItem);

/**
 * @swagger
 * /api/v1/delete-todo:
 *   delete:
 *     tags:
 *       - Todo
 *     summary: Delete a todo item.
 *     description: Delete a todo item from the user's task list.
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Task ID to delete.
 *     responses:
 *       200:
 *         description: Todo item deleted successfully.
 *       404:
 *         description: Not found - Task not found for the given user.
 *       500:
 *         description: Internal server error.
 */
router.delete('/delete-todo', deleteTodoItem);


/**
 * @swagger
 * /api/v1/get-all-todo:
 *   get:
 *     tags:
 *       - Todo
 *     summary: Get all todo items.
 *     description: Retrieve all todo items for the authenticated user.
 *     parameters:
 *       - in: query
 *         name: pageno
 *         schema:
 *           type: integer
 *         description: The page number for pagination.
 *     responses:
 *       200:
 *         description: Successful operation.
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               type: boolean
 *             message:
 *               type: string
 *       500:
 *         description: Internal server error.
 */
router.get('/get-all-todo', getAllTodo)

/**
 * @swagger
 * /api/v1/update-todo:
 *   put:
 *     tags:
 *       - Todo
 *     summary: Update a todo item.
 *     description: Update a specific todo item for the authenticated user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               task:
 *                 type: string
 *                 description: Updated task description.
 *               title:
 *                 type: string
 *                 description: Updated title of the todo item.
 *               id:
 *                 type: string
 *                 description: Id of item.
 *     responses:
 *       200:
 *         description: Successful operation. Todo item updated.
 *       400:
 *         description: Bad request. Invalid input parameters.
 *       404:
 *         description: Not found. Todo item not found.
 *       500:
 *         description: Internal server error.
 */

router.put('/update-todo', updateTodo)
export default router;
