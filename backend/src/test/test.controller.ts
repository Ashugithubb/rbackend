import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards, Query } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt.auth';
import { GetTestQueryDto } from './dto/query.dto';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createTestDto: CreateTestDto,@Req() req) {
    const role = req.user.role;
    return this.testService.create(createTestDto,role);
  }

  @Get()
  findAll(@Query() query:GetTestQueryDto) {

    return this.testService.findAllTest(query);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number,@Req() req) {
    const regId=req.user.regId
    return this.testService.findOne(id,regId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestDto: UpdateTestDto) {
    return this.testService.update(+id, updateTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testService.remove(+id);
  }
}
